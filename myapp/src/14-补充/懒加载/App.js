import React , {Component, Suspense} from 'react'

const Nowplaying = React.lazy(() => import('./components/Nowplaying'))
const Comingson = React.lazy(() => import('./components/Comingson'))


export default class App extends Component {
  state = {
    type: 0
  }
  render () {
    return (<div>
      <button onClick={() => {
        this.setState({
          type: 0
        })
      }}>正在上映</button>
      <button onClick={() => {
        this.setState({
          type: 1
        })
      }}>即将上映</button>
      <Suspense fallback={<div>正在加载中。。。</div>}>
        {
          this.state.type === 1 ? <Nowplaying></Nowplaying> : <Comingson></Comingson>
        }
      </Suspense>
    </div>)
  }
}



