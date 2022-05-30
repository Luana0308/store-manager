const express = require('express');

const router = express.Router();
const { getAllSales, 
        getSalesById, 
        createSales, 
        createSalesProducts,
    } = require('../controllers/salesController');

router.get('/:id', getSalesById);
router.get('/', getAllSales);
router.post('/', createSales, createSalesProducts);

module.exports = router;