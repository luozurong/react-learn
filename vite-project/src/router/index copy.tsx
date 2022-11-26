import App from '../App'
import Home from '../views/Home'
import About from '../views/Page3'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

const BaseRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        {/* 重定向到home */}
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)

export default BaseRouter