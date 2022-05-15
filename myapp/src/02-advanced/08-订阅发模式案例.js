import React from 'react'
import axios from 'axios'
import './css/03-communaction.css'

var bus = {
  list: [],
  // 订阅
  subscribe (callback) {
    this.list.push(callback)
  },
  // 发布
  publish (text) {
    console.log(this.list)
    this.list.forEach(callback => {
      callback && callback(text)
    })
  }
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      filmList: [],
      info: ''
    }
    this.getData()
  }

  getData () {
    axios.get('/test.json').then(res => {
      console.log(res.data.data.films)
      this.setState({
        filmList: res.data.data.films
      })
    })
  }
  render () {
    return (
      <div>
        {
          this.state.filmList.map(item => <FilmItem 
            key={item.filmId} 
            {...item}>
          </FilmItem>)
        }
        <FilmDetail/>
      </div>
    )
  }
}

class FilmItem extends React.Component{
  render () {
    let { name, poster, grade, synopsis} = this.props
    return <div onClick={() => {
      bus.publish(synopsis)
    }}>
      <div className="filmItem">
        <img src={poster} alt={name}/>
        <div>
          <h4>{this.props.name}</h4>
          <div>观众评分{grade}</div>
        </div>

      </div>
    </div>
  }
}

class FilmDetail extends React.Component{
  constructor () {
    super()
    this.state = {
      info: ''
    }
    bus.subscribe((info) => {
      console.log('我在filmDetai中定义--==', info)
      this.setState({
        info: info
      })
    })
  }
  render () {
    return <div className="filmDetail">
      
   {this.state.info}
    </div>
  }
}
export default App