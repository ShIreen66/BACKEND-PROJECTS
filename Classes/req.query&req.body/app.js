const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World")
})


app.get('/create',(req, res) => {
    console.log(req.query)
    req.query
    res.send("data received")

})

app.post('/about',(req, res) => {
    console.log(req.body)
    req.post
    res.send("data received")

})
app.get('*', (req, res) => {
    res.send("error: 404 page not found")
})

app.listen(3000, () => {
    console.log("localhost port run")
})