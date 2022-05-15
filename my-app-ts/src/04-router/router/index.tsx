import React , {Component} from 'react'
import {HashRouter, Redirect, Route, Switch} from 'react-router-dom'

import Film from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'
import Detail from '../views/Detail'

export default class IndexRouter extends Component {
  render () {
    return (<HashRouter>
      <Switch>
        <Route path="/film" component={Film}></Route>
        <Route path="/cinemas" component={Cinemas}></Route>
        <Route path="/center" component={Center}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Redirect exact from="/" to="/film"/>
      </Switch>
    </HashRouter>)
  }
}