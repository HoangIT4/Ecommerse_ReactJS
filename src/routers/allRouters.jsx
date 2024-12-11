import { lazy } from 'react'


const routers = [
    { path: '/', component:lazy(() => import('@pages/HomePage/HomePage'))},
    { path: '/ourshop', component:lazy(() => import('@pages/OurshopPage/OurshopPage'))},
    { path: '/loginform', component:lazy(() => import('@pages/SideBar/SideBar'))},
    { path: '/search', component:lazy(() => import('@components/SearchPage/SearchPage'))},
    { path: '/cart', component:lazy(() => import('@pages/CartDetail/CartDetail'))},
    { path: '/productdetail/:productId', component:lazy(() => import('@pages/ProductDetail/ProductDetail'))},
    { path: '/categories', component:lazy(() => import('@pages/CategoriesPage/CategoriesPage'))},
    { path: '/categories/:id', component:lazy(() => import('@pages/CategoriesPage/CategoriesPage'))},
    { path: '/cartdetail', component:lazy(() => import('@pages/CartDetail/CartDetail'))},

]

const useRouters =[
    {path: "/user/profile", component:lazy(()=> import('@pages/UserPage/UserProfile'))},
    {path: "/user/address", component:lazy(()=> import('@pages/UserPage/UserAddress'))},
    {path: "/user/notification", component:lazy(()=> import('@pages/UserPage/UserNoti'))},
    {path: "/user/purchase", component:  lazy(() => import('../pages/UserPage/UserPurchase'))},
    {path: "/user/change_password", component:lazy(()=> import('@pages/UserPage/UserChangePass'))}
]


export { routers, useRouters};