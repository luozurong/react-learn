import React , {Component} from 'react'
import request from '../utils/request'
export default class Film extends Component {
  state = {
    filmsList: []
  }
  componentDidMount () {
    request('https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=9123974',{
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res.data.data.films)
      this.setState({
        filmsList: res.data.data.films
      })
    })
  }
  render () {
    return (<div>
      <ul>
        {
          this.state.filmsList.map(item => <li key={item.filmId}
          onClick={() => {
            this.props.history.push('/detail/'+item.filmId)
          }}>
            <img style={{width: '100px'}} alt={item.name} src={item.poster}/>
            <div>{item.name}</div>
          </li>)
        }
      </ul>
    </div>)
  }
}