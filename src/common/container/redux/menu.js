import { handleActions, createAction } from 'redux-actions'

export const updateNavMenuType = createAction('update nav menu type', payload => payload)
export const resetNavMenuType = createAction('reset nav menu type')

// 菜单栏展开收缩
const navMenuType = handleActions({
  'update nav menu type'(state, action) {
    const newState = action.payload === 'vertical' ? 'inline' : 'vertical'
    return newState
  },
  'reset nav menu type'(state, action) {
    return 'vertical'
  },
}, 'inline')

export default navMenuType
