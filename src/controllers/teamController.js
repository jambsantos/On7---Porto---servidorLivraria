const team = require ("../models/team.json");
const fs = require('express');

const getAll = (req,res) => {
    res.status(200).send(team)
}

module.exports = {
    getAll
}