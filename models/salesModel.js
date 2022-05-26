const connection = require('./connection');

const getAllSales = () => {
    const sales = connection.execute(
        'SELECT * FROM StoreManager.sales;',
    );
    return sales;
};

const getSalesById = (id) => {
    const salesId = connection.execute(
        'SELECT * FROM StoreManager.sales WHERE id = ?;', [id],
    );
    return salesId;
};

module.exports = {
    getAllSales,
    getSalesById,
};