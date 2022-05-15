import React , {Component} from 'react'
import {List} from 'immutable'

var arr = List([1,3,4])
console.log(arr)
var arr2 = arr.push(12)
var arr3 = arr2.concat([5,7,8])
console.log(arr.toJS(), arr2.toJS(), arr3.toJS())

export default class App extends Component {
  state = {
    favor: List(['111','222','333'])
  }
  render () {
    return (<div>
      App
      <ul>
        {
          this.state.favor.map(item => <li key={item}>{item}</li>)
        }
      </ul>
    </div>)
  }
}