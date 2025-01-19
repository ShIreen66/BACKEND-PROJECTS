const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == "/about") {
        res.end("about page")
    }
    if (req.url == "/profile") {
        res.end("profile page ")
    }
    if (req. url == "/") {
        res.end("home page")
    }
    // console.log(req.url)
    // res.end('Hello World')
})

server.listen(3000)