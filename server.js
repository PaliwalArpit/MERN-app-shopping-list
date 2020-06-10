const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const item = require('./routes/api/items');
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

//DB config

const db = require('./config/keys').mongoUri;

//Connect to mongo
mongoose.connect(db,{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=> console.log("Connected mongoDB"))
.catch(err => console.log(err));

//User routes 
app.use('/api/items',item);

const port = process.env.PORT || 5000
app.listen(port , () => console.log(`Server started on port  ${port}`));
