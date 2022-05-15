import React from 'react'


class Navibar extends React.Component {
  render () {
    return (
      <div style={{background: 'yellow'}}>
        <button style={{float: 'left'}}>back</button>
        <span  style={{margin: '0  auto'}}>卖座电影</span>
        <button style={{float: 'right'}} onClick={() => {
          this.props.myEvent()
        }}>center</button>
      </div>
    )
  }
}

export default Navibar