import { message } from 'antd'
import * as ajaxFun from './ajax'

export const ajax = ajaxFun
export function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

export const createAjaxAction = (api, startAction, endAction) => (param, cb) =>
  (dispatch) => {
    let respon
    dispatch(startAction())
    // eslint-disable-next-line no-param-reassign
    param = isArray(param) ? param : [param]
    api(...param)
    .then(checkStatus) // eslint-disable-line no-use-before-define
    .then(response => response.json())
    .then((resp) => {
      respon = resp
      dispatch(endAction({ req: param, res: resp }))
    })
    .then(() => {
      if (respon.status === 1 || respon.status === true) {
        cb && cb(respon)
      } else if (!respon.status) {
        message.error(respon.msg)
      }
    })
    .catch(catchError) // eslint-disable-line no-use-before-define
  }

export const createAjax = (url, param, callback) => {
  let respon;
  ajax.fetchJSONByPost(url)(param)
    .then(checkStatus) // eslint-disable-line no-use-before-define
    .then(response => response.json())
    .then((resp) => {
      respon = resp
    })
    .then(() => {
      if (respon.status === 1) {
        callback && callback(respon.data)
      }
    })
    .catch(catchError) // eslint-disable-line no-use-before-define
}

export const hasResponseError = (data, errorHandler) => {
  if (typeof data !== 'object') {
    try {
      // eslint-disable-next-line no-param-reassign
      data = JSON.parse(`${data}`);
    } catch (e) {
      message.error(`非法的响应数据格式，请联系管理员！[${data}]`,
        MESSAGE_DURATION) // eslint-disable-line no-undef
      return true;
    }
  }
  if (!data.status && errorHandler === undefined) {
    return true;
  }
  if (!data.status && data.httpError && errorHandler !== undefined) {
    return typeof errorHandler === 'function' ? errorHandler(data.httpError) : errorHandler
  }
  return false;
};

export const createApiCustomAjax = (api, startAction, endAction) => (data, apiParam, cb) =>
  (dispatch) => {
    let respon
    dispatch(startAction())
    // eslint-disable-next-line no-param-reassign
    data = isArray(data) ? data : [data]
    api(apiParam)(...data)
      .then(checkStatus) // eslint-disable-line no-use-before-define
      .then(response => response.json())
      .then((resp) => {
        respon = resp
        dispatch(endAction({ req: data, res: resp }))
      })
      .then(() => {
        if (respon.status === 1) {
          cb && cb(respon)
        }
      })
      .catch(catchError) // eslint-disable-line no-use-before-define
  }

export const fakeAjaxAction = (startAction, endAction, callBackAction) => (data, cb) => (dispatch) => {
  dispatch(startAction())
  dispatch(endAction({ req: {}, res: { data: data } }))
  callBackAction && dispatch(callBackAction())
}

function catchError(error) {
  const { response } = error
  if (!response) {
    console.log(error)
    return
  }
  if (response.status === 401) {
    alert('请重新登录！')
        // 线上环境，刷新页面以重定向到登录页面
    process.env.NODE_ENV === 'production' && location.reload()
  } else if (response.status === 403) {
    alert('你缺少相关权限，部分功能无法使用')
  } else if (response.status) {
    alert(`${response.status}:请联系管理员`)
  }
}

function checkStatus(response) {
  const status = response.status
  if ((status >= 200 && status < 300) || status === 400 || status === 500) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  throw error
}
// eslint-disable-next-line no-extend-native
Date.prototype.format = function (fmt) { // author: meizz
  const o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    S: this.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    // eslint-disable-next-line no-param-reassign
    fmt = fmt.replace(RegExp.$1,
      (`${this.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  for (const k in o) { // eslint-disable-line no-restricted-syntax
    if (new RegExp(`(${k})`).test(fmt)) {
      // eslint-disable-next-line no-param-reassign
      fmt = fmt.replace(RegExp.$1,
      (RegExp.$1.length === 1) ?
        (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
    }
  }
  return fmt;
};

// 这个算法以东北半球为标准
export const circle2dodecagon = (circle) => {
  const sin = Math.sin
  const cos = Math.cos
  const PI = Math.PI;
  const center = circle.getCenter()
  // const radius = circle.getRadius()
  const bounds = circle.getBounds()
  const southWest = bounds.getSouthWest()
  const northEast = bounds.getNorthEast()

  const x = center.getLat()
  const y = center.getLng()
  const xMin = southWest.getLat()
  const yMin = southWest.getLng()
  const xMax = northEast.getLat()
  const yMax = northEast.getLng()
  const rx = x - xMin;
  const ry = y - yMin;
  const points = [];
  points[0] = [xMax, y];
  points[1] = [x + (rx * cos(PI / 6)), y + (ry * sin(PI / 6))];
  points[2] = [x + (rx * cos(PI / 3)), y + (ry * sin(PI / 3))];
  points[3] = [x, yMax];
  points[4] = [x + (rx * cos(2 * (PI / 3))), y + (ry * sin(2 * (PI / 3)))];
  points[5] = [x + (rx * cos(5 * (PI / 6))), y + (ry * sin(5 * (PI / 6)))];
  points[6] = [xMin, y];
  points[7] = [x + (rx * cos(7 * (PI / 6))), y + (ry * sin(7 * (PI / 6)))];
  points[8] = [x + (rx * cos(4 * (PI / 3))), y + (ry * sin(4 * (PI / 3)))];
  points[9] = [x, yMin];
  points[10] = [x + (rx * cos(5 * (PI / 3))), y + (ry * sin(5 * (PI / 3)))];
  points[11] = [x + (rx * cos(11 * (PI / 6))), y + (ry * sin(11 * (PI / 6)))];

  return points.map(p => (new AMap.LngLat(p[1], p[0]))); // eslint-disable-line no-undef
}
export const getStepDate = (step) => {
  const date = new Date()
  date.setDate(date.getDate() + step)
  return date.format('yyyy-MM-dd')
}

export const getCityIds = (cityId) => {
  if (cityId === undefined || cityId === '') {
    return []
  }
  const v1 = cityId.toString().slice(0, 2)
  const v2 = cityId.toString().slice(2, 4)
  const v3 = cityId.toString().slice(4, 6)
  if (parseInt(v3, 10) !== 0) {
    return [Number(`${v1}0000`), Number(`${v1}${v2}00`), Number(cityId)]
  }
  if (parseInt(v2, 10) !== 0) {
    return [Number(`${v1}0000`), Number(cityId)]
  }
  return [Number(cityId)]
}


export const checkCityId = (cityList, id) => {
  const cityIds = getCityIds(id)
  let list = cityList
  while (cityIds.length) {
    const curCity = cityIds.shift()
    const city = list.filter(item => item.value === curCity)
    if (city.length) {
      list = city[0].children
    } else {
      return false
    }
  }
  return true
}
