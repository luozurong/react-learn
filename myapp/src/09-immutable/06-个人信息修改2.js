import React , {Component} from 'react'
import {fromJS} from 'immutable'
export default class App extends Component {
  state = {
    info: fromJS({
      name: 'lzr',
      location: {
        province: 'guangxi',
        city: 'guigang'
      },
      favor: ['读书', '写代码', '跑步']
    })
  }

  componentDidMount () {
    console.log(this.state.info)
  }

  render () {
    return (<div>
      <h1>个人信息修改页面</h1>
      <button onClick={() =>{
        this.setState({
          info: this.state.info.setIn(['name'], 'hmc').setIn(['location', 'city'], '桂平')
        }, () => {
          console.log(this.state.info)
        })
      }}>修改</button>
      <div>
        {this.state.info.get('name')}
        <br/>
        {
          this.state.info.getIn(['location','province'])
        } -
        {
          this.state.info.get('location').get('city')
        }
        <br/>
        {
          this.state.info.get('favor').map((item, index) => <div key={item}>{item}<button onClick={()=>{
            console.log(index)
            this.setState({
              info: this.state.info.updateIn(['favor'], (list) => list.splice(index, 1))
            })
          }}>del</button></div>)
        }

      </div>
    </div>)
  }
}