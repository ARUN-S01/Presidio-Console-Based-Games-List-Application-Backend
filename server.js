// Importing Libraries
const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors'); // Cross-Origin Resource Sharing (Middleware)

const uri = "mongodb+srv://a2r0u0n2:asdf0110@game.z5dyslm.mongodb.net/?retryWrites=true&w=majority"; // Connection String
const client = new MongoClient(uri);

client.connect(err => { // MongoDB Connection
    console.log("Connected to DB");
});

// Configuring API
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

// CRUD Methods
// Insert
app.post('/insert', async (request, response) => {
    console.log(request.body);
    const collection_ = client.db("gameList").collection("games");
    const result = await collection_.insertOne(request.body);
    response.status(200).send("Success");
});

// Update
app.put('/update', async (req, res) => {
    const col = client.db("gameList").collection("games");
    const filter = { name: req.body.name, year: req.body.year };
    const up_doc = {
        $set: {
            name: req.body.name,
            isFav: req.body.isFav
        }
    }
    const result = await col.updateOne(filter, up_doc);
    res.status(200).send(result);
})

// Get
app.get('/get', async (request, response) => {
    const col = client.db("gameList").collection("games");
    const result = await col.find({}).toArray();
    response.status(200).send(result);
})

// Delete
app.delete('/del', async (req, res) => {
    const col = client.db("gameList").collection("games");
    var myquery = { name: req.body.name, year: req.body.year };
    const rsult = await col.deleteOne(myquery);
    res.status(200).send(rsult);

})

// Trial Response
app.get('/hello', async(req, res) => {
    res.status(200).send("You are on hosted API by Arun S")
})

app.listen(3000, () => {
    console.log("Server is Live");
})