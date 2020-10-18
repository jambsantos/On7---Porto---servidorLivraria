const books = require ("../models/books.json");
const fs = require('fs');

const getAll = (req,res) => {
    res.status(200).send(books)
}

const getById = (req,res) => {
    const id = req.params.id;
    res.status(200).send(books.find((book) => book.id == id));
};

const getByCategoria =(req,res) => {
    const categoria = req.params.categoria;
    const FilterBooks = books.filter((book) => book.categoria == categoria);
    res.status(200).send({FilterBooks});
}

module.exports = {
    getAll,
    getById,
    getByCategoria
}