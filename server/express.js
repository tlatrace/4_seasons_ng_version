const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./keys');

const app = express();
const port = 3000;

//middleware qui transforme l'objet req en json pour toutes les requêtes
app.use(bodyParser.json());
app.use(cors());

//import routes
const homeRoute = require('./routes/home');
const postsRoute = require('./routes/posts');

app.use('/', homeRoute);
app.use('/posts', postsRoute);

//connection do DB
mongoose.connect(keys.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Successfully connected to DB !')
});

//start to listen to the server at the given port
app.listen(port, () => console.log('Server started on port 3000'));
