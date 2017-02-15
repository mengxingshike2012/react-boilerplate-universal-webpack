import { Router } from 'express'

import ssr from './controller/ssrController'

export const ServerRenderRouter = ssr


export const ApiRouter = new Router()
