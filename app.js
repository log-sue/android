const express = require('express');
const database = require('./config/database');
const app = express();
const port = 3000;
const routes = require('./routes');

// Using body-parser in express
app.use(express.json()); 
app.use(express.urlencoded( {extended : false } ));

// Route definition
app.use('/', routes);

// Run server
app.listen(port, function () {
    console.log('Example app listening on port : ' + port);
});