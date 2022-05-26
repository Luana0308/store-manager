const express = require('express');

const router = express.Router();
const { getAllProducts, getProductsById } = require('../controllers/productController');

router.get('/:id', getProductsById);
router.get('/', getAllProducts);

module.exports = router;
