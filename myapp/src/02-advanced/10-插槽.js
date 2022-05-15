import React from 'react'

class Child extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        Child
        {this.props.children[2]}
        {this.props.children[1]}
        {this.props.children[0]}
      </div>
    )
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Child>
          <div>111</div>
          <div>222</div>
          <div>333</div>
        </Child>
      </div>
    )
  }
}
/** 
 * 1. 为了复用(*)
 * 2. 一定程度减少父子通信
*/

export default App