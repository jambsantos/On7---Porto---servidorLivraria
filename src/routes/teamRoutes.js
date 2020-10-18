const express = require('express');
const router = express.Router();
const controller = require('../controllers/teamController');

router.get("/",controller.getAll);
router.get("/team",controller.getAll);

module.exports = router;
