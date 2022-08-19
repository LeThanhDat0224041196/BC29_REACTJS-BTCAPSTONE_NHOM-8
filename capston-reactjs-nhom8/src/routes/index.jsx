import React, {lazy} from 'react'
import {useRoutes} from 'react-router-dom'

const HomeLayout = lazy(()=> import('../layouts/home')); 
const Home = lazy(()=>import('../pages/home/home'));
const MovieDtail = lazy(()=> import('../pages/movie-detail/movie-detail'));

const Booking = lazy(()=>import('../pages/booking/booking'));

const AuthGuard = lazy(()=>import('../guards/auth.guard'));
const NoAuthGuard = lazy(()=> import('../guards/no.-auth.guard'));
const AdminGuard = lazy(()=>import('../guards/admin.guards'));

const Login = lazy(()=>import('../pages/login/login'));
const AdminLayout = lazy(()=>import('../layouts/admin'));

const MovieManagement = lazy(()=>import('../pages/movie-management/movie-management'));
const CreateMovie = lazy(()=>import('../pages/create-movie/Create-Movie'));
const UpdateMovie = lazy(()=>import('../pages/update-movie/Update-Movie'));
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
                        {
                            path: '/login',
                            element: <Login />
                        },
                    ],
                },
            ],
        },
        {
            path: '/admin',
            element: <AdminLayout />,
            children: [
                {
                    path: '/admin/',
                    element: <AdminGuard />,
                    children: [
                        {
                            path: '/admin/movie-management',
                            element: <MovieManagement />,
                        },
                        {
                            path: 'admin/movie-management/create',
                            element: <CreateMovie />,
                        },
                        {
                            path: '/admin/movie-management/:movieid/update',
                            element: <UpdateMovie />,
                        }
                    ]
                }
            ]
        },
    ])
  
  
    return routing
}

export default Router