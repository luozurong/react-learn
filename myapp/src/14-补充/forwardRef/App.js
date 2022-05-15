import React , {Children, Component} from 'react'

export default class App extends Component {
  myText = null
  render () {
    return (<div>
      <button onClick={() => {
        console.log(this.myText.current.value)
        this.myText.current.focus()
      }}>获取焦点</button>
      <Child callBack={(el) => {
        console.log(el)
        this.myText = el
      }}></Child>
    </div>)
  }
}

class Child extends Component {
  myText = React.createRef()
  componentDidMount () {
    this.props.callBack(this.myText)
  }
  render () {
    return (<div style={{background: "yellow"}}>
      <input defaultValue="111" ref={this.myText}/>
    </div>)
  }
}