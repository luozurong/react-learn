import React , {Component} from 'react'

export default class App extends Component {
  state = {
    list: [1,2,3,4,5,6,7,8,9,0]
  }
  myRef = React.createRef()
  getSnapshotBeforeUpdate () {
    console.log(this.myRef.current.scrollHeight)
    return this.myRef.current.scrollTop
  }

  componentDidUpdate (prevProps, prevState, value) {
    console.log(this.myRef.current.scrollHeight)
    this.myRef.current.scrollTop = this.myRef.current.scrollHeight + value
  }
  render () {
    return (<div>
      <h1>邮箱应用</h1>
      <button onClick={ () => {
        this.setState({
          list: [...[11,22,33,44,55,66,77,88,99], ...this.state.list]
        }, () => {
          console.log(this.state.list)
        })
        
      }}>来邮件了</button>
      <div ref={this.myRef} style={{height: '200px', overflow: 'auto'}}>
        <ul>
          {
            this.state.list.map(item => <li style={{height: '100px', background:'yellow'}} key={item}>{item}</li>)
          }
        </ul>
      </div>
    </div>)
  }
}