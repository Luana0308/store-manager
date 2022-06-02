const connection = require('./connection');

const getAllSales = () => {
    const sales = connection.execute(
        `SELECT sa.id AS saleId, sa.date,  sp.product_id AS productId, sp.quantity 
         FROM StoreManager.sales AS sa INNER JOIN StoreManager.sales_products
         AS sp ON sa.id = sp.sale_id;`,
    );
    return sales;
};

const getSalesById = (id) => {
    const query = `SELECT sa.date, sp.product_id AS productId, sp.quantity 
                    FROM StoreManager.sales AS sa
                    INNER JOIN StoreManager.sales_products AS sp
                    ON sa.id = sp.sale_id
                    WHERE sa.id = ?;`;
    const salesId = connection.execute(query, [id]);
    return salesId;
};

const createSales = () => {
    const createSale = connection.execute('INSERT INTO StoreManager.sales VALUES ()');
    return createSale;
};

const createSalesProducts = (saleId, productId, quantity) => {
    const createSaleProduct = connection.execute(
        'INSERT INTO StoreManager.sales_products(sale_id, product_id, quantity) VALUES(?, ?, ?)', 
        [saleId, productId, quantity],
    );
    
    return createSaleProduct;
};

const updateSales = (saleId, productId, quantity) => {
    const updateSale = connection.execute(
        'UPDATE StoreManager.sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ?', 
        [quantity, saleId, productId],
    );
    return updateSale;
};

module.exports = {
    getAllSales,
    getSalesById,
    createSales,
    createSalesProducts,
    updateSales,
};