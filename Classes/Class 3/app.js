const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!') // default route
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/profile', (req, res) => {
    res.send('Profile Page')
})

app.listen(3000)