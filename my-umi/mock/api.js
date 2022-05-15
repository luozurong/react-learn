export default {
  'GET /users': {
    name: 'lzr',
    age: 17
  },
  'POST /users/login': (req, res) => {
    console.log(res.body)
    if (req.body.username === 'lzr') {
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