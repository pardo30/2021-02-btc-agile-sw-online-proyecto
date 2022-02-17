const mongoose = require('mongoose');
const db = mongoose.connection;
const dotenv = require('dotenv');
dotenv.config();
const URI = process.env.DB_URI || 'mongodb://localhost/db2';

function connect() {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    db.on('open', () => {
        console.log('Database connected:', process.env.DB_URI);
    })

    db.on('error', error => {
        console.error(error);
    })
};

connect();