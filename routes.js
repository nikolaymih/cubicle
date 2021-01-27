const { Router } = require('express');

const productController = require('./controllers/productController');
const aboutController = require('./controllers/aboutController');
const router = Router();

router.use('/products', productController);
router.use('/about', aboutController);

module.exports = router; 