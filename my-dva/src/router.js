import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'

import App from './routes/App'
import Center from './routes/Center'
import Cinemas from './routes/Cinema'
import Film from './routes/Film'
import Detail from './routes/Detail'
import Login from './routes/login'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/" render={() => {
          return <App>
            <Switch>
            <Route path="/film" component={Film}/>
            <Route path="/cinemas" component={Cinemas}/>
            <Route path="/center" render={() => localStorage.getItem('token') ? <Center/> : <Redirect exact to="/login"/>}/>
            <Route path="/detail/:id" component={Detail}/>
            <Redirect exact from="/" to="/film"></Redirect>
          </Switch>
        </App>
        }}></Route>
        
      </Switch>
    </Router>
  );
}

export default RouterConfig;
