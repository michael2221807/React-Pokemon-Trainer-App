// const mongoose = require('mongoose')

// const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Users'

// mongoose
//     .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

const { mongoose } = require('mongodb');
const uri = "mongodb+srv://pokemon:pokemon123@pokemon.ptw7j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new mongoose(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = { mongoose }  // Export the active connection.
