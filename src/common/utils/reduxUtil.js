import { handleActions, createAction } from 'redux-actions'
import { hasResponseError, createAjaxAction } from 'utils'
import { message } from 'antd'

const camelToBlank = name =>
  name.replace(/([A-Z])/g, ' $1').toLowerCase()

/**
 * @param state
 * @param action
 * @param operation [Function]
 * @returns {*}
 */
export const createReducerAction = (state, action, operation) => {
  const { res } = action.payload
  if (hasResponseError(res)) {
    message.error(res.msg, 10)
    return { ...state, loading: false }
  }
  return operation()
}

/**
 * helper
 * @param typeList, 即nameList, [xxx xxx]
 * @param defaultState
 * @param actionList {'xxx xxx': 123}
 * @returns {*}
 */
const createReducerHelper = ({ typeList, defaultState, actionList }) => {
  const defaultAction = {
    request: (state, action) => ({ ...state, loading: true }),
    receive: (state, action) => createReducerAction(state, action, () => {
      const { res } = action.payload
      return { ...res.data, loading: false }
    }),
    update: (state, action) => ({ ...state, ...action.payload }),
    reset: (state, action) => defaultState,
  }

  const actionObj = {}
  typeList.forEach((ele) => {
    Object.keys(ele).forEach((key) => {
      actionObj[ele[key]] = actionList[ele[key]] || defaultAction[key]
    })
  })
  return handleActions(actionObj, defaultState)
}

/**
 * createReducer
 * @param defaultState, 默认状态
 * @param name, 与actions中的name对应
 * @param actions, 自定义action
 * @param isLocal, true创建update&reset
 */
export const createReducer = ({ defaultState, name, actions = {}, isLocal }) => {
  const nameList = typeof name === 'string' ? [name] : name

  const typeList = nameList.map(ele =>
    (isLocal ? {
      update: `update ${camelToBlank(ele)}`,
      reset: `reset ${camelToBlank(ele)}`,
    } : {
      request: `request ${camelToBlank(ele)}`,
      receive: `receive ${camelToBlank(ele)}`,
    })
  )

  const actionList = {}
  Object.keys(actions).forEach((key) => {
    actionList[camelToBlank(key)] = actions[key]
  })

  return createReducerHelper({ typeList, defaultState, actionList })
}

export const createFetchAction = ({ name, api }) =>
  createAjaxAction(api, createAction(`request ${camelToBlank(name)}`), createAction(`receive ${camelToBlank(name)}`))
