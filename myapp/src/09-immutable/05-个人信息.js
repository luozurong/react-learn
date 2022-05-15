import React , {Component} from 'react'
import {List, Map} from 'immutable'
export default class App extends Component {
  state = {
    info: Map({
      name: 'lzr',
      location: Map({
        province: 'guangxi',
        city: 'guigang'
      }),
      favor: List(['读书', '写代码', '跑步'])
    })
  }
  render () {
    console.log(this.state.info.get('name'))
    return (<div>
      <h1>个人信息修改页面</h1>
      <button onChange={() =>{
        this.setState({
          info: this.state.info.set('name', 'hmc').set('location',this.state.info.get('location').set('city', 'guiping'))
        })
      }}>修改</button>
      <div>
        {this.state.info.get('name')}
        <br/>
        {
          this.state.info.get('location').get('province')
        } -
        {
          this.state.info.get('location').get('city')
        }
        <br/>
        {
          this.state.info.get('favor').map((item, index) => <div key={item}>{item}<button onClick={()=>{
            console.log(index)
            this.setState({
              info: this.state.info.set('favor', this.state.info.get('favor').splice(index, 1))
            })
          }}>del</button></div>)
        }

      </div>
    </div>)
  }
}