import { connect } from 'dva'
import React , {Component} from 'react'
import Tabbar from '../components/Tabbar'

class App extends Component {
  render () {
    return (<div>
      {this.props.children}
      {this.props.isShow && <Tabbar/>}
    </div>)
  }
}

export default connect(state => {
  console.log(state)
  return {
    a: 1,
    isShow: state.maizuo.isShow
  }
})(App)