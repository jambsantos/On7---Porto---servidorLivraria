const books = require ("../models/books.json");
const fs = require('express');

const getAll = (req,res) => {
    res.status(200).send(books)
}

module.exports = {
    getAll
}