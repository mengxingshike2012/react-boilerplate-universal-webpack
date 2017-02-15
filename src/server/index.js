import Express from 'express'
import { Server } from 'http'
import ejs from 'ejs'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import sfs from 'session-file-store'
import csrf from 'csurf'
import favicon from 'serve-favicon'
import path from 'path'

import config from '../../config'
import { ServerRenderRouter, ApiRouter } from './routes'
import { loggerMiddleware, traceMiddleware } from './middlewares'

const app = new Express()
const server = new Server(app)

const FileStore = sfs(session)

app.use(session({
  store: new FileStore(),
  secret: 'shop-dwd',
  name: '__dwd_sid',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 24 * 60 * 60 * 1000, // 24h
  },
}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ limit: '4mb' }))
app.use(traceMiddleware)
app.use(loggerMiddleware)
// csrf check
app.use(csrf())
// csrf error handler
app.use((err, req, res, next) => {
  // console.log('req.path', req.path)
  if (err.code !== 'EBADCSRFTOKEN') {
    next(err)
  } else if (req.path === '/alipay/notify') {
    next('route')
  } else {
    res.status(403).json({
      status: 0,
      msg: 'you dont\'t have the permission to send this request',
    })
  }
})

app.use(favicon(path.join(__dirname, '../..', 'static', 'favicon.ico')))
app.use(Express.static(path.join(__dirname, '../..', 'static')))

app.disable('x-powered-by')
app.engine('html', ejs.renderFile)
app.set('views', path.join(__dirname, 'views'))

/* router middlerwares */
app.use('/api', ApiRouter)
app.use('/', ServerRenderRouter)

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
} else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
