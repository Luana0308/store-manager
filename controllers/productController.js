const product = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const [products] = await product.getAllProducts();

  res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const [products] = await product.getProductsById(id);
  // console.log(products[0]);

  if (!products[0]) {
    // console.log('entrou no if');
    return res.status(404).json({ message: 'Product not found' });
  }

   res.status(200).json(products[0]);
};

module.exports = {
    getAllProducts,
    getProductsById,
};