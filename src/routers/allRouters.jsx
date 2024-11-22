import { lazy } from 'react'

const routers = [
    { path: '/', component:lazy(() => import('@pages/HomePage/HomePage'))},
    { path: '/ourshop', component:lazy(() => import('@pages/OurshopPage/OurshopPage'))},
    { path: '/loginform', component:lazy(() => import('@pages/SideBar/SideBar'))},
    { path: '/search', component:lazy(() => import('@components/SearchPage/SearchPage'))},
    { path: '/productdetail/:id', component:lazy(() => import('@pages/ProductDetail/ProductDetail'))},


]

const useRouters =[
    {path: "/user/profile", component:lazy(()=> import('@pages/UserPage/UserProfile'))},
    {path: "/user/address", component:lazy(()=> import('@pages/UserPage/UserAddress'))},
    {path: "/user/notification", component:lazy(()=> import('@pages/UserPage/UserNoti'))},
    {path: "/user/change_password", component:lazy(()=> import('@pages/UserPage/UserChangePass'))}
]

export { routers, useRouters};