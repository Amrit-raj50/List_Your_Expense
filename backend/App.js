const express = require('express');

const App = express();

App.use(express.json());
App.use(express.urlencoded({ extended : true}))//if data is comming from html forn then it converts the data into object 


const cors = require('cors');
const listRoute = require('./src/routes/routes');

App.use(cors());
App.use(listRoute);

App.use((req,res) => {
    res.status(404).json({msg : 'Route not found'});
})

module.exports = App;