import { connect } from 'dva'
import React , {Component} from 'react'

class Detail extends Component {
  componentDidMount () {
    console.log(this.props)
    console.log('拿到上一个页面传过来的id')
    this.props.dispatch({
      type: 'maizuo/hide'
    })
  }

  componentWillUnmount () {
    this.props.dispatch({
      type: 'maizuo/show'
    })
  }
  render () {
    return (<div>
      detail
    </div>)
  }
}

export default connect()(Detail)