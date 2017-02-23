import test from 'ava'


import { getCityData } from '../investmentController'

test('getCityData', async (t) => {
  const expected = [
    {
      id: 2,
      name: '上城',
      classfication: '浙江省',
    },
    {
      id: 3,
      name: '下城',
      classfication: '浙江省',
    },
    {
      id: 6,
      name: '广东',
      classfication: '广东省',
    },
    {
      id: 7,
      name: '福建',
      classfication: '福建省',
    },
  ]
  const value = await Promise.resolve(getCityData())
  t.deepEqual(value.unOpenCities, expected, 'wrong city data')
})
