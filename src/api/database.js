const mongoose = require('mongoose');
const db = mongoose.connection;
require('dotenv').config();
const URI = process.env.NODE_ENV==='test'
    ? process.env.DB_URI_TEST
    : process.env.DB_URI

mongoose.connect(URI)
  .then(db => console.log('Database connected:', URI))
  .catch(error => console.error(error));

module.exports = mongoose;