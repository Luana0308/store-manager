const express = require('express');

const router = express.Router();
// const { validateName } = require('../middlewares/validateName');
// const { validateQuantity } = require('../middlewares/validateQuantity');
const { getAllProducts, 
        getProductsById, 
        createProduct } = require('../controllers/productController');

router.get('/:id', getProductsById);
router.get('/', getAllProducts);
router.post('/', createProduct);

module.exports = router;
