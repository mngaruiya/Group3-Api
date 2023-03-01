const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


//Import Routes
const routes = require('./routes/routes');
const indexRoutes = require('./routes/index');


// Define the port number
const port = process.env.PORT || 3000;
const databaseUrl = process.env.DATABASE_URL || '';

//initialize a mongoose connection
const database = mongoose.connection;
mongoose.connect(databaseUrl);

//create a listener to the db
database.on ('error',(error) =>{
  console.error(error);
});
database.once ('connected', () =>{
  console.log('Database Connected');
});

// Create an express app
const app = express();
//ensure application only accepts data in json format
app.use(express.json()); 

//tells the app to use the defines routes
app.use('/', routes);




app.listen(port, () => {
    console.log (`Server is running on PORT ${port}`);
  });


   