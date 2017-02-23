import {
  createFetchAction,
  createReducer,
  createReducerAction,
} from 'utils/reduxUtil'

import * as InvestmentAPI from 'apis/investment'

/* ------------- Types and Action Creators ------------- */
export const fetchBusinessCityList = createFetchAction({ name: 'businessCityList', api: InvestmentAPI.fetchBusinessCityList })
export const addNewBusinessCity = createFetchAction({ name: 'newBusinessCity', api: InvestmentAPI.addNewBusinessCity })
export const requestRegionOperation = createFetchAction({ name: 'regionOperation', api: InvestmentAPI.requestREgionOperation })

export const Actions = {
  fetchBusinessCityList,
  addNewBusinessCity,
  requestRegionOperation
}
/* ------------- Reducers and Initial State ------------- */
export const defaultState = { loading: false, openCities: [], unOpenCities: [] }

export default createReducer({
  defaultState,
  name: ['businessCityList', 'newBusinessCity', 'regionOperation'],
  actions: {
    receiveBusinessCityList: (state, action) => createReducerAction(state, action, () => {
      const { data } = action.payload.res
      return { ...state, openCities: data.openCities, unOpenCities: data.unOpenCities }
    }),
    receiveNewBusinessCity: (state, action) => createReducerAction(state, action, () => ({ ...state, loading: false })),
    requestRegionOperation: (state, action) => ({ ...state, loading: false }),
    receiveRegionOperation: (state, action) => createReducerAction(state, action, () => ({ ...state, loading: false })),
  }
})
