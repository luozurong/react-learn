import React from 'react'
import axios from 'axios'
import './css/03-communaction.css'

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
            event={(value) => {
              console.log('ssssss', value)
              this.setState({
                info: value
              })
            }}
            {...item}>
          </FilmItem>)
        }
        <FilmDetail info={this.state.info}/>
      </div>
    )
  }
}

class FilmItem extends React.Component{
  render () {
    let { name, poster, grade, synopsis} = this.props
    return <div onClick={() => {
      console.log(synopsis)
      this.props.event(synopsis)
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
  render () {
    return <div className="filmDetail">
        {this.props.info}
   
    </div>
  }
}
export default App