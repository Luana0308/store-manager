const validateProductId = (req, res, next) => {
    const { productId } = req.body;
    
    if (!productId) {
        res.status(400).json({ message: '"productId" is required' });
    }
    next();
};

module.exports = {
    validateProductId,
};