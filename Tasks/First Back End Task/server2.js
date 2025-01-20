var express = require("express")

var server = express()

server.get('/product', (req, res) => {
    // res.send(req.query);
    if (req.query && req.query.category && req.query.price) {
        res.send (`Products in ${req.query.category} with price less than ${req.query.price}`)
    }
    else if (req.query && req.query.category) {
        res.send (`Products in ${req.query.category}`)
    }
    else if (req.query && req.query.price) {
        res.send (`price less than ${req.query.price}`)
    }
    else {
        res.send(`All Products`)
    }
})

server.get('*', (req, res) => {
    res.send("404 Route not found")
})



server.listen(3000,() => {
    console.log("abc")
})
