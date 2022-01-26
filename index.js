const express = require('express');
const app = express();
const { MongoClient } = require("mongodb");
const cors = require('cors');
const objectId = require('mongodb').ObjectId;



//Middle were ------------------------------------------
app.use(cors());
app.use(express.json());

//Port---------------------------------------------------
const port = process.env.PORT || 7000;

// data base related -------------------------------------------
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ne473.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



client.connect(err => {
const UserCollection = client.db("cooking").collection("user");

  app.post('/user', async (req, res) => {
    const userData = req.body;
    console.log(userData);
    const result = await UserCollection.insertOne('userData');
    res.send(result);
  });
  


  console.log('data base connected');
});






//test get -----------------------------------------------
app.get('/', (req, res) => {
    res.send('connected');
})
// listening port -----------------------------------------
app.listen(port, () => {
    console.log('listening ports', port);
});