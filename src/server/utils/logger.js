import { Logger, transports } from 'winston'
import config from '../../../config'

require('winston-daily-rotate-file')

const transportsConfig = [
  new transports.DailyRotateFile({
    level: config.log.level,
    dirname: config.log.path,
    filename: 'winston',
    datePattern: '.yyyy-MM-dd.log',
    handleExceptions: true,
    json: true,
    colorize: false,
  }),
]

if (process.env.NODE_ENV === 'development') {
  transportsConfig.push(new transports.Console({
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  }))
}

const logger = new Logger({
  transports: transportsConfig,
  exitOnError: false,
})

export default logger
