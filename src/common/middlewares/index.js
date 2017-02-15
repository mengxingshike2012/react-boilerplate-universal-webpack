
import { routerMiddleware } from 'react-router-redux'
import router from './router'
import history from '../history'

const reduxRouterMiddleware = routerMiddleware(history)

export {
    reduxRouterMiddleware,
    router,
}
