import React from 'react'
import { NavLink } from 'umi'
import style from './index.module.less'
export default function IndexLayout (props: any) {
  console.log(props)
  if (props.location.pathname === '/city' || props.location.pathname.includes('/detial')) {
    return <div>{props.children}</div>
  }
  return (
    <div>
      {props.children}
      <ul>
        <li><NavLink to="/film" activeClassName={style.active}>film</NavLink></li>
        <li><NavLink to="/cinema" activeClassName={style.active}>cinema</NavLink></li>
        <li><NavLink to="/center" activeClassName={style.active}>center</NavLink></li>
      </ul>
    </div>
  )
}