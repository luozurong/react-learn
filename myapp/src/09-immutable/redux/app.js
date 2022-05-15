import React , {Component} from 'react'
import store from './redux/store'
import MRouter from './router/indexRouter'
import Tabbar from './views/components/Tabbar'
import './views/css/app.css'

export default class App extends Component {
  state = {
    show: store.getState().TabbarReducer.get('show')
  }
  componentDidMount () {
    console.log(1111,store.getState().TabbarReducer.get('show'))

    store.subscribe(() => {
     console.log('app 订阅1', store.getState())

      this.setState({
        show: store.getState().TabbarReducer.get('show')
      })
    })
  }
  render () {
    return (<div>
      <MRouter>
       {this.state.show &&  <Tabbar></Tabbar>}
      </MRouter>
      
    </div>)
  }
}