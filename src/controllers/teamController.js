const team = require ("../models/team.json");
const fs = require('fs');

const getAll = (req,res) => {
    res.status(200).send(team)
}

const getById = (req,res) => {
    const id = req.params.id;
    res.status(200).send(team.find((colab) => colab.id == id));
}

const getAgeById =(req,res) => {
    const id = req.params.id;
    const birthday = team.find((colab)=>colab.id == id).aniversario.split("/");
    const newBirthday = new Date(birthday[2],birthday[1]-1,birthday[0]);

    res.status(200).send("age ".concat(new Date().getFullYear() - Number(birthday[2])));
}

module.exports = {
    getAll,
    getById,
    getAgeById
}