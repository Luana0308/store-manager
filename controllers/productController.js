const product = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const [products] = await product.getAllProducts();

  res.status(200).json(products);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const [products] = await product.getProductsById(id);

  if (!products[0]) {
    return res.status(404).json({ message: 'Product not found' });
  }

   res.status(200).json(products[0]);
};

const createProduct = async (req, res) => {
  const [products] = await product.getAllProducts();
  const { name, quantity } = req.body;

  const productsNameEquals = products.filter((pd) => pd.name === name);
  
  if (productsNameEquals.length > 0) {
    return res.status(409).json({ message: 'Product already exists' });
  }

  const [Newproducts] = await product.createProduct(name, quantity);

  res.status(201).json({ id: Newproducts.insertId, name, quantity });
};

module.exports = {
    getAllProducts,
    getProductsById,
    createProduct, 
};