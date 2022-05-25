const product = require('../models/productsModel');

const getAllProducts = () => {
    const products = product.getAllProducts();
  
    return products;
  };

module.exports = {
    getAllProducts,
};