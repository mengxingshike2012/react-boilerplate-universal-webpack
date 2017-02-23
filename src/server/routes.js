import { Router } from 'express'

import ssr from './controller/ssrController'
import auth from './controller/authController'
import investment from './controller/investmentController'

export const ServerRenderRouter = ssr
export const AuthRouter = auth

export const APIRouter = new Router()

APIRouter.use(investment)
