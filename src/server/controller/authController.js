import { Router } from 'express'
import crypto from 'crypto'
import { loginedFilter } from '../middlewares'
import { goHome, goCas, goLogin, goCasLogout, goTarget } from '../helpers/director'
import { save } from '../helpers/session'
import logger from '../utils/logger'
// import config from '../../../config'

const router = new Router()

router.get('/login', loginedFilter(goHome), (req, res, next) => {
  const target = req.query.target
  const message = req.flash('login:message')
  res.render('login.html', { mode: 'login', target, message, csrfToken: req.csrfToken() })
})

router.get('/resetPwd', loginedFilter(goHome), (req, res, next) => {
  const target = req.query.target
  const message = req.flash('login:message')
  res.render('login.html', { mode: 'resetPwd', target, message, csrfToken: req.csrfToken() })
})
router.post('/requestyzm', loginedFilter(goHome), (req, res, next) => {
  console.log('yzm')
  const result = {
    success: true,
    data: '123456',
  }
  res.json(result)
})

const login = () => {}
const getGrantCity = (name, type) => {}

router.post('/login', loginedFilter(goHome), (req, res, next) => {
  const { username, password } = req.body
  const md5Password = crypto.createHash('md5').update(password).digest('hex')
  login(username, md5Password).then((result) => {
    logger.verbose('login result', result)
    if (!(result.status && result.data)) {
      req.flash('login:message', result.msg)
      goLogin(req, res)
    }
    // 保存session&&cookie,跳转目标地址
    return getGrantCity(username, 'A').then((cityList) => {
      save(req.session, { loginUsername: username, loginUsertype: 'A' })
      req.cookies.loginUsertype = 'A'
      goTarget(req, res, next)
    })
  }).catch(e => res.status(500).send(e.message))
})

router.get('/cas', loginedFilter(goHome), (req, res, next) => {
  goCas(req, res, next)
})

router.get('/logout', (req, res, next) => {
  logger.verbose('logout', Date.now())
  const sess = req.session
  const sessionloginedUsertype = sess.loginUsertype
  // 登录状态下， 加盟用户跳转登录页面，总部跳转CAS
  // 非登录状态下，检测cookie判断用户身份跳转
  // 若无法判断，则默认跳转login页面

  if (sess.loginUsername) {
    sess.destroy(err => logger.error(err))

    if (sessionloginedUsertype === 'S') {
      logger.verbose('go cas logout')
      goCasLogout(req, res)
    } else {
      goLogin(req, res)
    }
  } else if (req.cookies.loginUsertype === 'S') {
    goCasLogout(req, res)
  } else {
    goLogin(req, res)
  }
})

export default router
