const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const DB_CONNECTION = process.env.DB_CONNECTION;

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const booksRoute = require('./routes/books');

app.use('/books', booksRoute);

//Main home route
app.get('/', (req, res) => {
  res.send('Welcome to my book directory!');
});

//Mongoose instance connection
mongoose.connect(DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to database')
);

//Username: ianwood
//Password: UW23a85iSttTr2Ir

//Start listening to server
app.listen(PORT, () => console.log('listening on port ' + PORT));
