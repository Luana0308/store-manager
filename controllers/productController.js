const product = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const [products] = await product.getAllProducts();

  res.status(200).json(products);
};

module.exports = {
    getAllProducts,
};