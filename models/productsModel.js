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

const createProduct = (name, quantity) => {
    const products = connection.execute(
        'INSERT INTO StoreManager.products(name, quantity) VALUES(?,?)', [name, quantity],
    );
    return products;
};

const updateProduct = (name, quantity, id) => {
    const products = connection.execute(
        'UPDATE products SET name = ? , quantity = ? WHERE id = ?', 
        [name, quantity, id],
        );
  
    return products; 
};

const deleteProduct = (id) => {
    const products = connection.execute('DELETE FROM products WHERE id = ?', [id]);
    return products;
};

module.exports = {
    getAllProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProduct,
};