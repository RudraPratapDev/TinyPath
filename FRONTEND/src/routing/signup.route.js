import {createRoute} from '@tanstack/react-router'

import { authRoute } from './auth.route'
import RegisterForm from '../components/RegisterForm'



export const signupRoute=createRoute({
    getParentRoute:()=>authRoute,
    path:'/signup',
    component:RegisterForm
})