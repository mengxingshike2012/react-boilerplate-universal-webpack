
import { createAction, handleActions } from 'redux-actions'
// import {
//   hasResponseError,
// } from 'utils'

/* ------------- Types and Action Creators ------------- */
export const addByClick = createAction('sync test')

/* ------------- Initial State ------------- */
export const initialState = { count: 0 }

/* ------------- Reducers ------------- */
export default handleActions({
  'sync test'(state, action) {
    return { ...state, count: state.count + 2 }
  },
}, initialState)
