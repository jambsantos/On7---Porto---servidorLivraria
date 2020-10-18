const express = require('express');
const router = express.Router();
const controller = require('../controllers/booksController');

router.get("/",controller.getAll);
router.get("/books",controller.getAll);

module.exports = router;

