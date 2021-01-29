const { Router } = require('express');
const productService = require('../services/productService');

const router = Router();

router.get('/', (req, res) => {
    let products = productService.getAll();
    res.render('home', { title: 'Browse', products });
})

router.get('/create', (req, res) => {
    res.render('create', { title: 'Browse', });
})

router.post('/create', (req, res) => {
  
    productService.create(req.body);

    res.redirect('/products');
})

router.get('/details/:productId', (req, res) => {

    let product = productService.getOne(req.params.productId);
    console.log(product);
    res.render('details', { title: 'Product details', product});
})

module.exports = router;

