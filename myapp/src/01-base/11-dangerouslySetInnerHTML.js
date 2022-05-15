import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  state = {
    html: '<div>ddsd</div>'
  }
  render () {
    return (
      <div>
        <span dangerouslySetInnerHTML={
          {__html: this.state.html}
        }></span>
      </div>
    )
  }
}