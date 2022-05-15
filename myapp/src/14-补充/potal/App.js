import React , {Component} from 'react'
import './App.css'
import Dialog from './components/Dialog'
import PortalDialog from './components/PortalDialog'
export default class App extends Component {
  state = {
    isShow: false,
    isPortalShow: false
  }
  render () {
    return (<div className="box" onClick={() => {
      console.log('box上监听事件')
    }}>
      <div className="left"></div>
      <div className="right">
        <button onClick={() => [
          this.setState({
            isShow: true
          })
        ]}>click</button>
        {this.state.isShow && <Dialog></Dialog>}

        <button onClick={() => [
          this.setState({
            isPortalShow: true
          })
        ]}>clickPortal</button>
        {this.state.isPortalShow && <PortalDialog onClose={() => {
          this.setState({
            isPortalShow: false
          })
        }}><div>
            我是罗祖榕
          </div></PortalDialog>}
      </div>
    </div>)
  }
}
