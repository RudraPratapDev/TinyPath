import { createRootRoute } from "@tanstack/react-router";
import App from '../App.jsx'
import {authRoute} from './auth.route.js'
import {homepageRoute} from './homepage.route.js'
import {dashboardRoute} from './dashboard.route.js'
import { userUrlRoute } from "./userUrl.route.js";
import NotFoundPage from "../pages/NotFoundPage.jsx";


 export const rootRoute=createRootRoute({
    component:App,
    notFoundComponent:NotFoundPage
})

export const routeTree=rootRoute.addChildren([
    authRoute,homepageRoute,dashboardRoute,userUrlRoute
])




