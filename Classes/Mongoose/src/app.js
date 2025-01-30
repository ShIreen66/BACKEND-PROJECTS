const server = require('express')

const app = server()

app.get('/', (req, res) =>{
    res.send("hello world")
})

module.exports = app