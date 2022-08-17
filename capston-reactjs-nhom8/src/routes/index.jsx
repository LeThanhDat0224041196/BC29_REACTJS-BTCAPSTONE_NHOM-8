import React, {lazy} from 'react'
import {useRoutes} from 'react-router-dom'

const HomeLayout = lazy(()=> import('../layouts/home')) 
const Home = lazy(()=>import('../pages/home/home'))
const MovieDtail = lazy(()=> import('../pages/movie-detail/movie-detail'))

const Booking = lazy(()=>import('../pages/booking/booking'))

const AuthGuard = lazy(()=>import('../guards/auth.guard'))
const NoAuthGuard = lazy(()=> import('../guards/no.-auth.guard'))
const AdminGuard = lazy(()=>import('../guards/admin.guards'))

function Router() {
    const routing = useRoutes([
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
                {
                    path:"/movie/:movieId",
                    element: <MovieDtail />
                },
                {
                    path: "/",
                    element:<AuthGuard />,
                    children:[
                        {
                            path: '/booking/:maLichChieu',
                            element: <Booking />,
                        },
                    ],
                },
                {
                    path: '/',
                    element: <NoAuthGuard />,
                    children:[
                        {},
                    ],
                },
            ],
        },
        {}
    ])
  
  
    return routing
}

export default Router