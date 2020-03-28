const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://reactapp:reactapp@cluster0-pcigr.mongodb.net/Users?retryWrites=true&w=majority'

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

module.exports = { mongoose }  // Export the active connection.

// 'mongodb://localhost:27017/Users' || 'mongodb+srv://reactapp:reactapp@cluster0-pcigr.mongodb.net/Users?retryWrites=true&w=majority'
