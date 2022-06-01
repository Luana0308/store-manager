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

const updateSales = async (req, res) => {
  const { id } = req.params;

   await salesService.updateSales({ ...req.body[0], id });

  res.status(200).json({
    saleId: id,
    itemUpdated: req.body,
  });
};

module.exports = {
    getAllSales,
    getSalesById,
    createSalesProducts,
    updateSales, 
};