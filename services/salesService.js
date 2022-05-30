const salesModel = require('../models/salesModel');

const getAllSales = () => {
    const sales = salesModel.getAllSales();
  
    return sales;
  };

  const getSalesById = (id) => {
    const salesId = salesModel.getSalesById(id);
  
    return salesId;
  };

  const createSales = () => {
    const createSale = salesModel.createSales();
    return createSale;
};

const createSalesProducts = (saleId, productId, quantity) => {
    const createSaleProduct = salesModel.createSalesProducts(saleId, productId, quantity);
    
    return createSaleProduct;
};

module.exports = {
    getAllSales,
    getSalesById,
    createSales,
    createSalesProducts,
};