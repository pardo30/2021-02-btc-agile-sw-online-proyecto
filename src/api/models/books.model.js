const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true,
    },
    authors: {
        type: String,
        require: true,
    },
    description: {
        type: String,
    },
    editorial: {
        type: String,
    },
    pages:{
        type: Number
    },
    ISBN: {
        type: String,
        unique: true
    },
    year: {
        type: Number,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now

    }

});

bookSchema.index({name: 'text'},{name: 'textScore'});
module.exports = model('Book', bookSchema);