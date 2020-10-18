const express = require('express');
const app = express();

const index = require('./routes/index');
const books = require('./routes/booksRoutes');
const team = require('./routes/teamRoutes');


app.use((req,res,next)=> {
    console.log("Nova requisição realizada");

    next()
});

app.use('/', index);
app.use('/books',books);
app.use('/team',team);

module.exports = app;
