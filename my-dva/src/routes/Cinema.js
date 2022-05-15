import { connect } from 'dva'
import React , {Component} from 'react'

class Cinemas extends Component {
  componentDidMount () {
    if(this.props.list.length === 0) {
      this.props.dispatch({
        type: 'maizuo/geCinemaList'
      })
    }else {
      console.log('使用缓存', this.props.list)
    }
  }
  render () {
    return (<div>
      <ul>
        {this.props.list.map(item => <li key={item.cinemaId}>{item.name}</li>)}
      </ul>
    </div>)
  }
}
const mapStateToProps = (state) => ({
  list: state.maizuo.list
})
export default connect(mapStateToProps)(Cinemas)