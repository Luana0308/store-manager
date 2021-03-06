const product = require('../models/productsModel');

const getAllProducts = async () => {
    const products = await product.getAllProducts();

    return products;
  };

  const getProductsById = (id) => {
    const products = product.getProductsById(id);
  
    return products;
  };

  const createProduct = (name, quantity) => {
    const products = product.createProduct(name, quantity);

    return products;
  };

  const updateProduct = (name, quantity, id) => {
    const products = product.updateProduct(name, quantity, id);
    return products; 
  };

  const deleteProduct = (id) => {
    const products = product.deleteProduct(id);
    return products;
  };

module.exports = {
    getAllProducts,
    getProductsById,
    createProduct,
    updateProduct, 
    deleteProduct, 
};