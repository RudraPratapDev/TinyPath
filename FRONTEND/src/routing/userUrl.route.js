import {createRoute} from '@tanstack/react-router'
import { rootRoute } from './routeTree'

import UserUrlPage from '../pages/UserUrlPage'
import { checkAuth } from '../utils/helper'



export const userUrlRoute=createRoute({
    getParentRoute:()=>rootRoute,
    path:'/urls',
    component:UserUrlPage,
    beforeLoad: (opts) => checkAuth(opts)
})