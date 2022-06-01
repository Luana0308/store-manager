const express = require('express');

const router = express.Router();
// const { validateQuantity } = require('../middlewares/validateQuantity');
// const { validateProductId } = require('../middlewares/validateProductId');
const { getAllSales, 
        getSalesById,  
        createSalesProducts,
        updateSales,
    } = require('../controllers/salesController');

router.get('/:id', getSalesById);
router.get('/', getAllSales);
router.post('/', createSalesProducts);
router.put('/:id', updateSales);

module.exports = router;