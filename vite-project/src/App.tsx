import { message } from 'antd'
import { useEffect } from 'react'
// import { Button } from 'antd'
// import { CheckCircleTwoTone} from '@ant-design/icons';
import { useLocation, useNavigate, useRoutes } from 'react-router-dom'
import router from './router'


/**
 * 
 * @returns 路由守卫
 */
function ToPage1 () {
  const nav = useNavigate()
  useEffect(() => {
    nav('/page1')
  }, [])
  return <i></i>
}

function ToLogin () {
  const nav = useNavigate()
  useEffect(() => {
    nav('/login')
  }, []) 
  return <i></i>
}
 
function BeforeRouterEnter () {
  const Outlet = useRoutes(router)
  let token = localStorage.getItem('token')
  let location = useLocation()

  if (token && location.pathname === '/login') {
    message.success('您已登录')
    return <ToPage1/>
  } 
  if (!token && location.pathname !== '/login') {
    message.success('您未登录')
    return <ToLogin/>
  }
  return Outlet
}

function App() {
  
  return (
    <div className="App">
      {/* 顶级组件 */}
      {/* <CheckCircleTwoTone twoToneColor="#52c41a" />
      <Button type="primary">按钮</Button> */}
      {/* <Link to="/home">home</Link>
      <Link to="/about">about</Link>
      <Link to="/user">user</Link> */}
      {/* <Outlet></Outlet> */}
      {/* {Outlet} */}
      {BeforeRouterEnter()}
    </div>
  )
}

export default App
