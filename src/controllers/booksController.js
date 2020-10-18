const books = require ("../models/books.json");
const fs = require('fs');

const getAll = (req,res) => {
    res.status(200).send(books)
}

const getById = (req,res) => {
    const id = req.params.id;
    res.status(200).send(books.find((book) => book.id == id));
}

const getByCategoria =(req,res) => {
    const categoria = req.params.categoria;
    const FilterBooks = books.filter((book) => book.categoria == categoria);
    res.status(200).send({FilterBooks});
}

const postBooks = (req,res) => {
    const{id, nome, autor, categoria, quantidade, formatoDigital} = req.body;
    books.push({id, nome, autor, categoria, quantidade, formatoDigital});
   
    fs.writeFile("./src/models/books.json",JSON.stringify(books),'utf8',function(err){
        if (err){
            return res.status(424).send({message:err});
        }
            console.log("Books atualizado com sucesso!");
        });

    res.status(201).send(books);
}

const deleteBooks =(req,res) => {
    const id = req.params.id;
    const filterBooksDelete = books.find((book) => book.id == id);
    const index =books.indexOf(filterBooksDelete)

    books.splice(index,1);

    fs.writeFile("./src/models/books.json",JSON.stringify(books),'utf8',function(err){
        if (err){
            return res.status(424).send({message:err});
        }
            console.log("Book deletado com sucesso!");
        });

    res.status(200).send(books);
}

const putBooks = (req,res)=>{
    try{
    const id = req.params.id;
    const modifyBooks = books.find((book) => book.id == id);
    const updatedBooks = req.body;
    const index = books.indexOf(modifyBooks);

    books.splice(index,1,updatedBooks);

    fs.writeFile("./src/models/books.json",JSON.stringify(books),'utf8',function(err){
        if (err){
            return res.status(424).send({message:err});
        }
            console.log("Quantidade atualizada com sucesso!");
        });

    res.status(200).send(books);
    } catch (err) {
    return res.status(424).send({ message: err });
  }
}

const patchBooks = (req,res)=>{
    const id = req.params.id;
    const uptaded = req.body;
    try {
    const modifyBooks = books.find((book) => book.id == id);
    const index = books.indexOf(modifyBooks);

   Object.keys(uptaded).forEach((chave) => {
      modifyBooks[chave]=uptaded[chave]
   });

    books.splice(index,1,modifyBooks);

    fs.writeFile("./src/models/books.json",JSON.stringify(books),'utf8',function(err){
        if (err){
            return res.status(424).send({message:err});
        }
            console.log("Atualização livros com sucesso!");
        });

    res.status(200).send(books);
    } catch (err) {
    return res.status(424).send({ message: err });
  }
}

module.exports = {
    getAll,
    getById,
    getByCategoria, 
    postBooks,
    deleteBooks,
    putBooks,
    patchBooks
}