const express = require('express')

const userModel = require('./model/user.model')

const app = express()

app.use(express.json())

app.post('/create', async (req,res) => {
    const {username, email, password, bio} = req.body

    const user = await userModel.create({
        email: email,
        username: username,
        password: password,
        bio:bio
    })

    res.send(user)
})


app.get('/get-user', async(req, res) => {
    const users = await userModel.find({
        email:"z@z.com"
    })
    res.send(users)
})

module.exports = app