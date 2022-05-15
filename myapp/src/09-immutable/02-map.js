import React , {Component} from 'react'
import {Map} from 'immutable'

var obj = {
  name: 'lzr',
  age: 110
}

var oldImmuObj = Map(obj)
var newImmutable = oldImmuObj.set('name', 'hmc')

// get获取immutable
console.log(newImmutable, newImmutable.get('name'), oldImmuObj, oldImmuObj.get('name'))

// immutable 转化普通对象
console.log(oldImmuObj.toJS(), newImmutable.toJS())
// export default class App extends Component {

//   state = {
//     info: Map({
//       name: 'lzr',
//       age: 110
//     })
//   }
//   render () {
//     return (<div>
//       <button onClick={() => {
//         this.setState({
//           info: this.state.info.set('name', 'hmc').set('age', 18)
//         })
//       }}>click</button>
//       App - {this.state.info.get('name')} - {this.state.info.get('age')}
//     </div>)
//   }
// }

export default class App extends Component {
  state = {
    info: Map({
      name: 'lzr',
      age: 110
    })
  }
  render () {
    return (<div>
      <button onClick={() => {
        var old = Map(this.state.info)
        var newImmu = old.set('name', 'lzr').set('age', 18)
        this.setState({
          info: newImmu
        })
      }}>click</button>
      App - {this.state.info.get('name')} - {this.state.info.get('age')}
    </div>)
  }
}