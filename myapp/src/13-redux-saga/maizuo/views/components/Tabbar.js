import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'

export default function Tabbar () {
  return (
    <div className={style.tabbar}>
      <ul>
        <li>
          {/* <a href="#/films">电影</a> */}
          <NavLink activeClassName="lzrActive" to="/films">电影</NavLink>
        </li>
        <li>
          {/* <a href="#/cinemas">影院</a> */}
          <NavLink activeClassName="lzrActive" to="/cinemas">电影院影</NavLink>
        </li>
        <li>
          {/* <a href="#/center">我的</a> */}
          <NavLink activeClassName="lzrActive" to="/center">我的</NavLink>
        </li>
      </ul>
    </div>
  )
}