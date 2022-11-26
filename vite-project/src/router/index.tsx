
import React, { lazy, ReactNode, Suspense } from 'react'
import  {Navigate} from 'react-router-dom'

import Home from '../views/Home'
import Login from '../views/login'
const Page3 = lazy(() => import('../views/Page3'))
const User = lazy(() => import('../views/User'))
const Page1 = lazy(() => import('../views/Page1'))
const Page2 = lazy(() => import('../views/Page2'))
// 解决报错: Uncaught Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
const lazyLoad = (children: ReactNode): ReactNode => {
  return (<Suspense fallback={<div>loading</div>}>
    {children}
  </Suspense>)
}

const routes = [
  {
    path: '/',
    element: <Navigate to="/page1"/>
  },
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/page1',
        element: lazyLoad(<Page1/>)
      },
      {
        path: '/page2',
        element: lazyLoad(<Page2/>)
      },
      {
        path: '/page3/page3-1',
        element: lazyLoad(<Page3/>)
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/user',
    element: lazyLoad(<User/>)
  },
  {
    path: '*',
    element: <Navigate to="/"/>
  }
]
export default routes