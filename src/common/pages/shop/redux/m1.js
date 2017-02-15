import { createAction, handleActions } from 'redux-actions'
// import {
//   createAjaxAction,
//   hasResponseError,
// } from 'utils'

/* ------------- Types and Action Creators ------------- */
export const addM1 = createAction('m1')

/* ------------- Initial State ------------- */
export const initialState = { count: 0 }

/* ------------- Reducers ------------- */
export default handleActions({
  'm1'(state, action) {
    return { ...state, count: state.count + 1 }
  },
}, initialState)
