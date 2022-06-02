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

const updateSales = async ({ id, productId, quantity }) => {
 const sale = await salesModel.updateSales(id, productId, quantity);
 return sale; 
};

const deleteSales = (id) => {
  const saleDelete = salesModel.deleteSales(id);
  return saleDelete;
};

module.exports = {
    getAllSales,
    getSalesById,
    createSalesProducts,
    updateSales,
    deleteSales,
};