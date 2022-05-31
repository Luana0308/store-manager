const salesModel = require('../models/salesModel');

const getAllSales = () => {
    const sales = salesModel.getAllSales();
  
    return sales;
  };

  const getSalesById = (id) => {
    const salesId = salesModel.getSalesById(id);
  
    return salesId;
  };

const createSalesProducts = async (saleArray) => {
  const [saleId] = await salesModel.createSales();

  saleArray.map((element) => 
    salesModel.createSalesProducts(saleId.insertId, element.productId, element.quantity));

  const saleProduct = {
    id: saleId.insertId,
    itemsSold: saleArray,
  };
  return saleProduct;
};

module.exports = {
    getAllSales,
    getSalesById,
    createSalesProducts,
};