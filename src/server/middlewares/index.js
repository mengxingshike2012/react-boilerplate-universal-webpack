import uuid from 'uuid/v1'
import logger from '../utils/logger'
import { validateTicket } from '../helpers/cas'
import config from '../../../config'
// import { isGrantedStaff } from '../service/dubbo/interfaces/authorityProvider'
import { goCas, goHome } from '../helpers/director'
import { save } from '../helpers/session'

// FIX ME
const isGrantedStaff = () => {}


export const traceMiddleware = (req, res, next) => {
  const traceId = uuid()
  req.traceId = traceId
  res.append('Trace-Id', traceId)
  next()
}

export const loggerMiddleware = (req, res, next) => {
  const traceId = req.traceId
  logger.verbose(`${req.method} ${req.path}`, { query: req.query, body: req.body, traceId })
  next()
}
export const loginedFilter = reducer => (req, res, next) => {
  if (req.session.loginUsername) {
    reducer(req, res, next)
  } else {
    next()
  }
}

export const notLoginedFilter = reducer => (req, res, next) => {
  if (!req.session.loginUsername) {
    reducer(req, res, next)
  } else {
    next()
  }
}

export const casCheck = (req, res, next) => {
  // 如果已经登录，跳过此中间件
  if (req.session.loginUsername) {
    next()
    return
  }

  const ticket = req.query.ticket
  if (!ticket) {
    next()
  } else {
    logger.verbose('cas ticket', ticket)
    // 验证ticket是否合法
    validateTicket(config.cas, config.serverName, ticket).then((success) => {
      const userName = success.user

      // 标记其是否有权限
      return isGrantedStaff(userName).then((resp) => {
        logger.verbose('isGrantedStaff', resp)
        if (resp.status && resp.data) {
          save(req.session, { isGrantedStaff: true, loginUsername: userName, loginUsertype: 'S' })
          goHome(req, res)
        } else {
          save(req.session, { isGrantedStaff: false })
          res.set('refresh', `5;url=${config.cas}/logout?service=${config.cas}/login?service=${config.serverName}`)
            .status(403).send('<h3 style="color: red">你没有访问该系统的权限!5秒后退出登录.....</h3>')
        }
      })
    }).catch((e) => {
      goCas(req, res) // 非法情况跳转
    })
  }
}
