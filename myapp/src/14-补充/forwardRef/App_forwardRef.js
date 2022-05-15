import React , {Component, forwardRef} from 'react'

export default class App extends Component {
  myText = React.createRef()
  render () {
    return (<div>
      <button onClick={() => {
        console.log(this.myText)
        this.myText.current.focus()
      }}>获取焦点</button>
      <Child ref={this.myText}></Child>
    </div>)
  }
}

const Child = forwardRef((props, ref) => {
  return <div style={{background: 'yellow'}}>
    <input ref={ref}/>
  </div>
})

