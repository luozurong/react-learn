import React from 'react'
import {NavLink, Redirect, Route, Switch} from 'react-router-dom'

import Nowplaying from './films/NowPlaying'
import Comingsoon from './films/Comingsoon'

import './components/Tabbar'
import style from './css/Film.module.css'

export default function Films () {
  return (
    <div  className={style.film + ' aaa'}>
      <h1>大轮播</h1>
      <div>
        <ul>
          <li>
            <NavLink activeClassName={style.lzrActive} to="/films/nowPlaying">正在热映</NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.lzrActive} to="/films/comingson">即将上映</NavLink>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/films/nowPlaying" component={Nowplaying}></Route>
        <Route path="/films/comingson" component={Comingsoon}></Route>
        <Redirect from="/films" to="/films/nowPlaying"/>
      </Switch>
    </div>
  )
}