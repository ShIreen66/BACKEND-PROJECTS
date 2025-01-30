const express = require("express")

const app = express()

app.use(express.json()) // middleware

const fs = require('fs')

app.get('/', (req, res) => {
    res.send("Hello World!")
})

// app.get('/about', (req, res) => {
//     res.send("This is the about page")   // route's
// })

// app.get('/about', (req, res) => {
//     req.query.name
//     console.log(req.query)    // req.query
//     res.send("This is the about page")
//     })

// app.post('/create',(req, res) => {
//     req.body.name
//     console.log(req.body)   // req.body
//     res.send("this is the create page")
// })

// for create 

app.post('/create', (req, res) => {

    const { fileName, fileData } = req.body
    const filePath = "./uploads/" + fileName

    fs.writeFile(filePath, fileData, (err) => {
        if(err) {
            console.log(err)
            res.send("file is not crated")
        }
        else {
            res.send("file is created")
        }
    })
})

app.get('/read', (req, res) => {
    const fileName  = req.query
    console.log(fileName)
    const filePath = "./uploads/" + fileName

    fs.readFile(filePath, (err,data) => {
        if (err) {
            console.log(err)
            res.send("file is readed")
        }
        else {
            res.send(data)
        }
    })
})



app.listen(3000, () => {
    console.log("this server is running on port 3000")
})