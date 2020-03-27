const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Users'

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

module.exports = { mongoose }  // Export the active connection.