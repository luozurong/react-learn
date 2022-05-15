import axios from 'axios'
import React , {Component} from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
  state = {
    myName: '22',
    list: []
  }
  render () {
    console.log('render')
    return (<div>
      <button onClick={() => {
        this.setState({
          myName: Math.random().toFixed(2)
        })
      }}>click</button>
      <span id="name">{this.state.myName}</span>
      <div id="wrap" style={{height: '100px', overflow: 'hidden', background: 'yellow'}}>
        <ul>
          {
            this.state.list.map(item => <li key={item.filmId}>{item.name}</li>)
          }
        </ul>
      </div>
    </div>)
  }
  componentDidMount () {
    axios.get('/test.json').then(res => {
      console.log(res)
      this.setState({
        list: res.data.data.films
      })
    })
  }

  UNSAFE_componentWillUpdate () {
    console.log('componentWillUpdate', document.getElementById('name').innerHTML)
  }

  componentDidUpdate (prevProps, pervState) {
    console.log('componentDidUpdate', document.getElementById('name'))
    // console.log(pervState.list)
    if (pervState.list.length === 0) {
      new BetterScroll('#wrap')
    }
  }
}