import React from 'react'
import axios from 'axios'
import './css/03-communaction.css'

const GlobalContext = React.createContext() // 创建context对象
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
      <GlobalContext.Provider value={{
        call: '打电话',
        sms: '短信',
        info: this.state.info,
        changeInfo: (value) => {
          this.setState({
            info: value
          })
        }
      }}>
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
          <FilmDetail/>
        </div>
      </GlobalContext.Provider>
    )
  }
}

class FilmItem extends React.Component{
  render () {
    let { name, poster, grade, synopsis} = this.props
    return (<GlobalContext.Consumer>
      {
        (value) => {
          return <div onClick={() => {
            value.changeInfo(synopsis)
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
    </GlobalContext.Consumer>)
  }
}

class FilmDetail extends React.Component{
  render () {
    return <div className="filmDetail">
      <GlobalContext.Consumer>
        {
          (value) => {
            return (
            <div>detail - {value.info}</div>
            )
          }
        }
      </GlobalContext.Consumer>
    </div>
  }
}
export default App