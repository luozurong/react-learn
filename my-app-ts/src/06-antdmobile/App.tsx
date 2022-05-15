import React , {Component} from 'react'
import store from './redux/store'
import IndexRouter from './router/index'

export default class App extends Component{
  
  state = {
    isShow: store.getState().isShow
  }

  componentDidMount () {

    store.subscribe(() => {
      console.log(store.getState())
      this.setState({
        isShow: store.getState().isShow
      })
    })
  }

  render () {
    return (<div>
      <IndexRouter/>
      {
        this.state.isShow && <ul>
        <li>电影</li>
        <li>影院</li>
        <li>我的</li>
      </ul>
      }
    </div>)
  }
}