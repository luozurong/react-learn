import React , {Component} from 'react'
var jsonObj = {
  name: 'lzr',
  age: undefined,
  sex: null
}

console.log(JSON.parse(JSON.stringify(jsonObj)))
export default class App extends Component {
  render () {
    return (<div>
      App
    </div>)
  }
}