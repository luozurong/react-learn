import React, {Component} from "react"
import { createPortal } from "react-dom"
let styles = {position: 'fixed', top: 0, bottom: 0, right: 0, left: 0, margin: 'auto', width: '100%', height: '100%',  background: "rgba(0,0,0,0.5)"}
export default class Dialog extends Component {
  
  render () {
    return createPortal((<div style={styles}>
      Dialog
    <div>loading</div>
      {this.props.children}
    <button onClick={() => {
      this.props.onClose()
    }}>button</button>
  </div>), document.body)
  }
}