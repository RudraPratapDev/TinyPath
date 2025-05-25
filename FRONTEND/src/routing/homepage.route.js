import {createRoute} from '@tanstack/react-router'
import { rootRoute } from './routeTree'
import Homepage from '../pages/Homepage'



export const homepageRoute=createRoute({
    getParentRoute:()=>rootRoute,
    path:'/',
    component:Homepage
})