const connection = require('./connection');

const getAllProducts = () => {
    const products = connection.execute(
        'SELECT * FROM StoreManager.products;',
    );
    return products;
};

const getProductsById = (id) => {
    const products = connection.execute(
        'SELECT * FROM StoreManager.products WHERE id = ?;', [id],
    );
    return products;
};

module.exports = {
    getAllProducts,
    getProductsById,
};