const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('./db/mongoose')
const userRouter = require('./routes/user-router')
const session = require("express-session");

const app = express()
const apiPort = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


app.use('/api', userRouter)

app.use(express.static( __dirname + "/my-app/build"));

app.get("*", (req, res) => {
    res.sendFile( __dirname + "/my-app/build/index.html");
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))