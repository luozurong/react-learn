import React , {Component} from 'react'
import {RouteComponentProps} from 'react-router-dom'
import store from '../redux/store'
interface IPrams{
  id: string
}
export default class App extends Component<RouteComponentProps<IPrams>, any> {
  componentDidMount () {
    // console.log((this.props.match.params as any).id)
    console.log(this.props.match.params.id)
    store.dispatch({
      type: 'hide'
    })
  }

  componentWillUnmount () {
    console.log(111)
    store.dispatch({
      type: 'show'
    })
  }
  render () {
    return (<div>
      detail - {(this.props.match.params as any).id}
    </div>)
  }
}