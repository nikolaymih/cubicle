const { Router } = require('express');

const productController = require('./controllers/productController');
const homeController = require('./controllers/homeController');
const accessoryControler = require('./controllers/accessoryControler');
const router = Router();

router.use('/', homeController);
router.use('/products', productController);
router.use('/accessories', accessoryControler);
router.get('*', (req, res) => {
    res.render('404');
})

module.exports = router; 