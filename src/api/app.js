const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
require('./database');

//Allow Json request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Allow cross-origin sharing
app.use(cors());

//App listen
// app.listen(8200, () => {
//     console.log('App running on port: ', 8000)
// })

// HTTP request logger middleware
app.use(morgan('dev'));

// Home route
app.get('/', (req, res) => { res.json('Home Page') });

// Routes
app.use('/book', require('./routers/books.router'))


module.exports = app;