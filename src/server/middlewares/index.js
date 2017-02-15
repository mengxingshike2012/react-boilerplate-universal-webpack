import uuid from 'uuid/v1'
import logger from '../utils/logger'


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
