import React, { Component } from 'react'
import propTypes from 'prop-types'
console.log(propTypes)
export default class Navbar extends Component {
  state = {

  }

  // props验证
  static propTypes = {
    title: propTypes.string, //‘验证是不是字符串的方法’,
    leftShow: propTypes.bool // ‘验证是不是BOOLEAN的方法’
  }
  // 默认属性值
  static defaultProps = {
    leftShow: true
  }

  // 属性是父组件传来的
  render () { 
    console.log(this.props)
    let {title, leftShow} = this.props
    return (
      <div>
        {leftShow && <button>返回</button>}
        Navbar-{title}
        {!leftShow && <button>返回</button>}
      </div>
    )
  }
}