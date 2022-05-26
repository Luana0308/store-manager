const express = require('express');
const productRoutes = require('./productRoutes');
const salesRouters = require('./salesRouters');

const router = express.Router();

router.use('/products', productRoutes);
router.use('/sales', salesRouters);

module.exports = router;