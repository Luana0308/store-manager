const salesModel = require('../models/salesModel');

const getAllSales = () => {
    const sales = salesModel.getAllSales();
  
    return sales;
  };

  const getSalesById = (id) => {
    const salesId = salesModel.getSalesById(id);
  
    return salesId;
  };

module.exports = {
    getAllSales,
    getSalesById,
};