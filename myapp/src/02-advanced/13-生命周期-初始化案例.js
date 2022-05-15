   import React from 'react'
   import BetterScroll from 'better-scroll'

  class App extends React.Component {
    state = {
      list: [1,2,3,4,5,6,7,11,8,9,0]
    }

    componentDidMount () {
      new BetterScroll('#wrap')
    }
    render () {
      return (
        <div>
          <div id="wrap" style={{height: '200px',background: '#f0f', overflow: 'hidden'}}>
            <ul>
              {this.state.list.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      )
    }
  }
  
  export default App