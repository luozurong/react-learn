import { NavLink } from 'dva/router'
import React , {Component} from 'react'
import style from './Tabbar.module.css'
export default class Tabbar extends Component {
  render () {
    return (<div className={style.footer}>
      <ul>
        <li>
          <NavLink to="/film" activeClassName={style.active}>film</NavLink>
        </li>
        <li>
          <NavLink to="/cinemas" activeClassName={style.active}>cinemas</NavLink>
        </li>
        <li>
          <NavLink to="/center" activeClassName={style.active}>center</NavLink>
        </li>
      </ul>
    </div>)
  }
}