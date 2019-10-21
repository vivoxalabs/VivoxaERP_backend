const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middleware
app.use(bodyParser.json());

//Import Routes
const customerRoute = require('./routes/customer');

app.use('/api/customer', customerRoute);

//default index route
app.get('/', (req, res) => {
  res.send("Hello man");
});

//Connect to DB
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION,
  () => console.log('connected to db')
);

//Load all files in models dir
fs.readdirSync(__dirname + '/models').forEach(function(filename){
  if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
}); 

app.listen(3000);