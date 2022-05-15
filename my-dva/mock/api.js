export default {
  'GET /users': {
    name: 'lzr',
    age: 100,
    location: 'guigang'
  },
  'POST /users/login': (req, res) => {
    if (res.body.username === 'lzr') {
      res.send({
        ok: 1
      })
    } else {
      res.send({
        ok: 0
      })
    }
    
  }
}