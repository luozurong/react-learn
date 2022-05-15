import React , {Component} from 'react'
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Search from '../views/Search'
import Center from '../views/Center'

import NotFound from '../views/NotFound'
import Detail from '../views/Detail'

import Login from '../views/Login'
import City from '../views/City'

function isAuth () {
  return localStorage.getItem('token')
}

// BrowseRouter 没有#的路径，好看，真正找后端请求页面，后段没有对应的路径处理，就会404，不好看
export default class IndexRouter extends Component {
  render () {
    return (<div>
      <Router>
      {this.props.children}
        <Switch>
          <Route path="/films" component={Films}></Route>
          <Route path="/cinemas" component={Cinemas} exact></Route>
          <Route path="/cinemas/search" component={Search}></Route>
          <Route path="/city" component={City}></Route>


          {/* <Route path="/center" component={Center}></Route> */}
          <Route path="/center" render={(props) => {
              console.log(props)
              return isAuth() ? <Center {...props}/> : <Redirect to="/login"/>
          }}/>

          <Route path="/login" component={Login}/>

          <Route path="/detail/:id" component={Detail}></Route>
          {/* <Route path="/detail" component={Detail}></Route>  */}
          {/* 重定向 exact精准匹配 */}
          <Redirect exact from="/" to="films"></Redirect>
          {/* 模糊匹配 */}
          <Route component={NotFound}/>
        </Switch>
        
      </Router>
    </div>)
  }
}