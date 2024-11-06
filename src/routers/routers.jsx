import { lazy } from 'react'

const routers = [
    { path: '/', component:lazy(() => import('@pages/HomePage/HomePage'))},
    { path: '/ourshop', component:lazy(() => import('@pages/OurshopPage/OurshopPage'))},
    { path: '/loginform', component:lazy(() => import('@pages/SideBar/SideBar'))},
    { path: '/search', component:lazy(() => import('@components/SearchPage/SearchPage'))},
    { path: '/productdetail/:id', component:lazy(() => import('@pages/ProductDetail/ProductDetail'))},



]
export default routers;