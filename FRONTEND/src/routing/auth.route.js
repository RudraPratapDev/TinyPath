import {createRoute} from '@tanstack/react-router'
import { rootRoute } from './routeTree'
import AuthenticationPage from '../pages/AuthenticationPage'
import { loginRoute } from './login.route'
import { signupRoute } from './signup.route'



export const authRoute=createRoute({
    getParentRoute:()=>rootRoute,
    path:'/auth',
    component:AuthenticationPage
})
authRoute.addChildren([loginRoute,signupRoute])