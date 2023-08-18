const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://parulloyal21:parul21@cluster0.hz1ghn7.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client;