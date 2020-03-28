const mongoose = require('mongoose')

const mongoURI = process.env.MONGOLAB_MAUVE_URI || 'mongodb://localhost:27017/Users'

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .catch(e => {
        console.error('Connection error nmsl', e.message)
    })

module.exports = { mongoose }  // Export the active connection.

// 'mongodb://localhost:27017/Users' || 'mongodb+srv://reactapp:reactapp@cluster0-pcigr.mongodb.net/Users?retryWrites=true&w=majority'
