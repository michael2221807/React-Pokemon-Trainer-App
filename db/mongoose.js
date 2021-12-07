const MongoClient  = require('mongodb')

const uri = "mongodb+srv://<username>:<password>@cluster0.pcigr.mongodb.net/pokemondb?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// const mongoURI = process.env.MONGODB_URI || 'mongodb://heroku_0d7f1kkj:p2r3cmeacgoa71758j51ap496u@ds347917.mlab.com:47917/heroku_0d7f1kkj'

// mongoose
//     .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
//     .catch(e => {
//         console.error('Connection error nmsl', e.message)
//     })

module.exports = { MongoClient  }  // Export the active connection.

// 'mongodb://localhost:27017/Users' || 'mongodb+srv://reactapp:reactapp@cluster0-pcigr.mongodb.net/Users?retryWrites=true&w=majority'
