const connection = require('./connection');

const getAllProducts = () => {
    const products = connection.execute(
        'SELECT * FROM StoreManager.products;',
    );
    return products;
};

module.exports = {
    getAllProducts,
};