let express = require("express")

const app = express()

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/about', (req, res) => {
    res.send("about page")
})

app.get('/profile', (req, res) => {
    res.send("profile page")
})

app.get('/services', (req, res) => {
    res.send("service page")
})

app.get('*', (req, res) => {
    res.send("404 Page Not Found")
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });