const salesService = require('../services/salesService');

const getAllSales = async (_req, res) => {
  const [sales] = await salesService.getAllSales();

  res.status(200).json(sales);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const [sales] = await salesService.getSalesById(id);

  if (!sales[0]) {
    return res.status(404).json({ message: 'Sale not found' });
  }

   res.status(200).json(sales);
};

const createSalesProducts = async (req, res) => {
  const newSaleProduct = await salesService.createSalesProducts(req.body);
  
  res.status(201).json(newSaleProduct);
};

module.exports = {
    getAllSales,
    getSalesById,
    createSalesProducts,
};