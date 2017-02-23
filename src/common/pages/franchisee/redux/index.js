import { createAction, handleActions } from 'redux-actions'

/* ------------- Types and Action Creators ------------- */
export const loadTable = createAction('load table');

/* ------------- Initial State ------------- */
export const initialState = {
  table: {
    data: [],
    pageSize: 20,
    currentPage: 1,
    total: 0,
  },
};

/* ------------- Reducers ------------- */
export default handleActions({
  'load table'(state, action) {
    const {
      currentPage,
    } = action;
    return {
      ...state,
      table: {
        ...state.table,
        data: [{
          city: '杭州',
          name: '张三',
          region: '一区',
          status: '合作中',
          phone: '12345678901',
          identityNumber: '111222333344556666',
          email: 'www@example.com',
        }, {
          city: '杭州',
          name: '张三',
          region: '一区',
          status: '已停止合作',
          phone: '12345678901',
          identityNumber: '111222333344556666',
          email: 'www@example.com',
        }],
        currentPage,
        total: 300,
      }
    }
  }
}, initialState)
