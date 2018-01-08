const express = require('express');
const app = express();

const path = require('path');
const mongoose = require('mongoose')
const cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://localhost/mean_belt');
mongoose.connection.on('connected', () => console.log('Connected to MongoDB'));
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + '/belt-angular/dist'))

const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));

require('./server/config/mongoose.js')
var routes_setter = require('./server/config/routes.js')
routes_setter(app)
//server
const port = 9200;
app.listen(port, () => console.log(`Express server is listening to port ${port}`))
