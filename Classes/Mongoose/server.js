const connect  = require('./src/db/db')
const app = require('./src/app')

connect ()

app.listen(3000, () => {
    console.log("port is running on localhost 3000")
})