const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Allow Json request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Allow cross-origin sharing
app.use(cors());

// HTTP request logger middleware
app.use(morgan('dev'));

// Home route
app.get('/', (req, res) => { res.send('Home Page') });

// Routes
app.get()

module.exports = app;