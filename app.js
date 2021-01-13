const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Middlewares
app.use(bodyParser.json());

//Import Routes
const booksRoute = require('./routes/books');

app.use('/books', booksRoute);

//Main home route
app.get('/', (req, res) => {
  res.send('Welcome to my book directory!');
});

//Mongoose instance connection
mongoose.connect('mongodb://localhost/db',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('Connected to DB')
);

//Start listening to server
app.listen(3000);
