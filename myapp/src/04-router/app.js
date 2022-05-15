import React , {Component} from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './views/components/Tabbar'
import './views/css/app.css'

export default class App extends Component {
  render () {
    return (<div>
      <MRouter>
        <Tabbar></Tabbar>
      </MRouter>
      
    </div>)
  }
}