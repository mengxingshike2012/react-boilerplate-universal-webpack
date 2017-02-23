import config from '../../../config'

export const goHome = (req, res, next) => res.redirect(config.serverName)

export const goCas = (req, res, next) => res.redirect(`${config.cas}/login?service=${config.serverName}`)

export const goLogin = (req, res, next) => {
  if (req.cookies.loginUsertype === 'S') {
    goCas(req, res, next)
  } else {
    if (req.query && req.query.target) {
      res.redirect(`/auth/login?target=${req.query.target}`)
    }
    res.redirect('/auth/login')
  }
}

export const goTarget = (req, res, next) => {
  if (req.query && req.query.target) {
    res.redirect(req.query.target)
  } else {
    goHome(req, res)
  }
}

export const goCasLogout = (req, res, next) => {
  res.redirect(`${config.cas}/logout?service=${config.cas}/login?service=${config.serverName}`)
}
