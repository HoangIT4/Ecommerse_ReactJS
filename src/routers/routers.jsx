import { lazy } from 'react'

const routers = [
    { path: '/', component:lazy(() => import('@pages/HomePage/HomePage'))},
    { path: '/ourshop', component:lazy(() => import('@pages/OurshopPage/OurshopPage'))},
    { path: '/loginform', component:lazy(() => import('@pages/SideBar/SideBar'))},



]
export default routers;