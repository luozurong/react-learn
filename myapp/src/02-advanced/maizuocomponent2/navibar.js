import React from 'react'


class Navibar extends React.Component {
  render () {
    return (
      <div style={{background: 'yellow', textAlign: 'center'}}>
        <button style={{float: 'left'}}>back</button>
        <span>卖座电影</span>
        <button style={{float: 'right'}} onClick={() => {
          this.props.myEvent()
        }}>center</button>
      </div>
    )
  }
}

export default Navibar