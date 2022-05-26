const product = require('../models/productsModel');

const getAllProducts = () => {
    const products = product.getAllProducts();
  
    return products;
  };

  const getProductsById = (id) => {
    const products = product.getProductsById(id);
  
    return products;
  };

module.exports = {
    getAllProducts,
    getProductsById,
};