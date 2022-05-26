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

module.exports = {
    getAllSales,
    getSalesById,
};