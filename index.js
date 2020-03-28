const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongoose = require('./db/mongoose')
const userRouter = require('./routes/user-router')
const session = require("express-session");
const { User } = require('./models/user-model.js')


const app = express()
const apiPort = process.env.PORT || 80

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

createUser = (req, res) => {
    const body = req.body
    // console.log(body)

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const user = new User({
        name: body.name,
        password: body.password,
        id: body.id,
        title: body.title,
        money: body.money,
        description: body.description,
        pokemon: body.pokemon,
        isCurrent: body.isCurrent,
        isChanging: body.isChanging
    })

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

updateUser = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    User.findOne({ id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        user.name = body.name
        user.password = body.password
        user.id = body.id
        user.title = body.title
        user.money = body.money
        user.description = body.description
        user.pokemon = body.pokemon
        user.isCurrent = body.isCurrent
        user.isChanging = body.isChanging

        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })
}

deleteUser = async (req, res) => {
    console.log(req.params.id)

    await User.findOneAndDelete({ id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }

        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUserById = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!user) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!users.length) {
            return res
                .status(404)
                .json({ success: false, error: `User not found` })
        }
        return res.status(200).json({ success: true, data: users })
    }).catch(err => console.log(err))
}



// app.use('/api', userRouter)
app.post('/api/user', createUser)
app.put('/api/user/:id', updateUser)
app.delete('/api/user/:id', deleteUser)
app.get('/api/user/:id', getUserById)
app.get('/api/users', getUsers)


app.use(express.static( __dirname + "/my-app/build"));

app.get("*", (req, res) => {
    res.sendFile( __dirname + "/my-app/build/index.html");
});

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))