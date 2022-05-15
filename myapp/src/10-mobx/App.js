import React , {Component} from 'react'
import {observable, autorun} from 'mobx'

var observableNumber = observable.box(10)
var observableName = observable.box('xiaoming')

autorun(() => {
  console.log(observableNumber.get())
})

autorun(() => {
  console.log(observableName.get())
})

setTimeout(() => {
  observableNumber.set(18)
}, 1000)

setTimeout(() => {
  observableName.set('lzr')
}, 2000)

// var myObj = observable.map({
//   name: 'lzr',
//   age: '110'
// })
var myObj = observable({
  name: 'lzr',
  age: '110'
})

autorun(() => {
  // console.log('对象的name的改变', myObj.get('name'), myObj.get())
  console.log('对象的name的改变', myObj.name, myObj)
})

setTimeout(() => {
  // myObj.set('name', 'hemingchan')
  myObj.name = 'hemingchan'
}, 3000)

export default class App extends Component {
  render () {
    return (<div>
      App
    </div>)
  }
}