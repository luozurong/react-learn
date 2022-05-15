import React , {Component} from 'react'

export default class App extends Component {
  state = {
    isShow: true
  }
  render () {
    return (<div>
      <Navbar title="首页" cb={()=>{
        console.log(111)
        this.setState({
          isShow: !this.state.isShow
        })
      }}/>
      {this.state.isShow && <SideBar/>}
    </div>)
  }
}

interface IProps {
  title: string,
  cb: ()=>void
}
class Navbar extends Component<IProps, any>{
  render () {
    return (<div>
      navabar - {this.props.title}
      <button onClick={() => {
        this.props.cb()
      }}>click</button>
    </div>)
  }
}

class SideBar extends Component{
  render () {
    return (<div>
      sidebar
    </div>)
  }
}