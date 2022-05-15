import React, {Component} from "react"

export default class Dialog extends Component {
  render () {
    return (<div style={{position: 'fixed', top: 0, bottom: 0, right: 0, left: 0, margin: 'auto', width: '100%', height: '100%',  background: "rgba(0,0,0,0.5)"}}>
      Dialog
    </div>)
  }
}