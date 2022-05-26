const express = require('express');

const router = express.Router();
const { getAllSales, getSalesById } = require('../controllers/salesController');

router.get('/:id', getSalesById);
router.get('/', getAllSales);

module.exports = router;