const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: {
        type: String,
        require: true,
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
    },
    year: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now

    }

});

bookSchema.index({name: 'text'},{name: 'textScore'});
module.exports = model('Book', bookSchema);