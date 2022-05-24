const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const publicDirectory = path.join(__dirname, '/public');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const app = express();

// routes varibales
var homePage = require('./routes/index');
var signUpPage = require('./routes/signUp');
var searchBar = require('./routes/searchBar');
var admin = require('./routes/admin');

// set views for each route destination page
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// serve static files in public folder
app.use(express.static(publicDirectory));


// parse body information used for post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', homePage);
app.use('/', signUpPage);
app.use('/', searchBar);
app.use('/', admin);

app.listen(port,()=>{
    console.log('running on port 8080')
})