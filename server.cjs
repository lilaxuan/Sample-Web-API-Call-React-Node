const express = require('express');
const pokemon = require('./backend/pokemon.api.cjs');
const users = require('./backend/user.api.cjs')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')

const app = express();


// Notes: When Creating db, no need to pre-set up schema
const mongoDBEndpoint = 'mongodb+srv://jiaxuanli:1234567890@cluster0.myqixtm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoDBEndpoint, {
    useNewUrlParser: true,
})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/pokemon', pokemon); // defined the base root url for the API
app.use('/api/users', users); // defined the base root url for the API

app.get('/', function (req, res) {
    res.send("This is the FIRST GET request")
});

app.get('/', function (request, response) {
    response.send("This is SECOND GET request");
})

app.put('/', function (request, response) {
    response.send("This is a PUT request")
})

app.listen(8001, function () {
    console.log("Starting app now...")
})