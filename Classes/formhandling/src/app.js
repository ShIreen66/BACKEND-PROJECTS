let userModel = require("./models/user.model")
let express = require("express")
let app = express()

app.use(express.json())

app.post('/create', async (req, res) => {
    const {username, email, password} = req.body

    const user = await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send(user)
})

app.get('/get-user', async(req, res) => {
    const user = await userModel.find({
        username: "abcd"
    })

    res.send(user)
})
    
module.exports = app