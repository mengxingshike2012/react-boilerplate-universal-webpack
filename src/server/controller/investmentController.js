import { Router } from 'express'
import _ from 'lodash'
import {
  mockCities,
  mockBusinessCities,
} from '../mock/investment'


const router = new Router()
export const getCityData = () => {
  const unOpenCities = _.differenceWith(mockCities, mockBusinessCities, (a, b) => a.name === b.city)
  return {
    unOpenCities,
    openCities: mockBusinessCities
  }
}
router.get('/investment/cities', (req, res, next) => {
  res.json({
    status: 1,
    data: getCityData()
  })
})

export default router
