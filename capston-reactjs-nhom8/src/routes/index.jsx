import React from 'react'
import {useRoutes} from 'react-router-dom'
import HomeLayout from '../layouts/home'

function Router() {
    const routing = useRoutes([
        {
            path: "/",
            element: <HomeLayout />,
        }
    ])
  
  
    return routing
}

export default Router