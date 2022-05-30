const express = require('express');

const router = express.Router();
const { validateName } = require('../middlewares/validateName');
const { validateQuantity } = require('../middlewares/validateQuantity');
const { getAllProducts, 
        getProductsById, 
        createProduct, 
        updateProduct } = require('../controllers/productController');

router.get('/:id', getProductsById);
router.get('/', getAllProducts);
router.post('/', validateName, validateQuantity, createProduct);
router.put('/:id', validateName, validateQuantity, updateProduct);

module.exports = router;
