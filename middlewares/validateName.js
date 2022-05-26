const validateName = (req, res, next) => {
 const { name } = req.bobdy;
    
    if (!name) {
        res.status(400).json({ message: '"name" is required' });
    }

    if (name.length < 5) {
        res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    }
    next();
};

module.exports = {
    validateName,
};