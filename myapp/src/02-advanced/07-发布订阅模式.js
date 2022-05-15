import React from 'react'

export default class App extends React.Component {
  render () {
    return (
      <div>
        app
      </div>
    )
  }
}

var bus = {
  list: [],
  // 订阅
  subscribe (callback) {
    console.log(callback)
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


// 订阅者
bus.subscribe((value) => {
  console.log(111, value)
})

bus.subscribe((value) => {
  console.log(222, value)
})

// 发布者
setTimeout(() => {
  bus.publish('男人啊')
}, 0)

