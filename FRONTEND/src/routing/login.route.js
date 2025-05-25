import {createRoute} from '@tanstack/react-router'
import LoginForm from '../components/LoginForm'
import { authRoute } from './auth.route'


export const loginRoute=createRoute({
    getParentRoute:()=>authRoute,
    path:'/login',
    component:LoginForm
})