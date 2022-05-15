import React , {Component} from 'react'
import { connect } from 'react-redux'
import MRouter from './router/indexRouter'
import Tabbar from './views/components/Tabbar'
import './views/css/app.css'


class App extends Component {
  componentDidMount () {
    // console.log(this.props)
  }
  render () {
    return (<div>
      <MRouter>
        {this.props.show &&  <Tabbar></Tabbar>}
      </MRouter>
      
    </div>)
  }
}

const mapStateToProps = (state) => {
  return {
    a: 1,
    b: 2,
    show: state.TabbarReducer.show
  }
}
export default connect(mapStateToProps)(App)