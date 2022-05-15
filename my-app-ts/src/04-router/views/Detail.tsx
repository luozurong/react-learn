import React , {Component} from 'react'
import {RouteComponentProps} from 'react-router-dom'
interface IPrams{
  id: string
}
export default class App extends Component<RouteComponentProps<IPrams>, any> {
  componentDidMount () {
    // console.log((this.props.match.params as any).id)
    console.log(this.props.match.params.id)
  }
  render () {
    return (<div>
      detail - {(this.props.match.params as any).id}
    </div>)
  }
}