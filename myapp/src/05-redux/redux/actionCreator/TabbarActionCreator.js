function hide () {
  return {
    type: 'lzr-tabbar-hidden'
  }
}

function show () {
  return {
    type: 'lzr-tabbar-show'
  }
}

export {show, hide}