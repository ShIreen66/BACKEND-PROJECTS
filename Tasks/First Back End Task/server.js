var express = require('express')
var server = express()
server.use(express.json()) // middleware


server.get('/hello', (req, res) => {
  // console.log(server)
  res.send('Hello World!')
})

server.get('/greet/:name', (req, res) => {
  var name = req.params.name
  // res.send('Hello John ')
  res.send(`hello, ${name}`)
})

server.post('/echo', (req, res)=> {
  res.send(req.body)
  // console.log(req.body)
})

server.listen(3000)