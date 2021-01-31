const { Router } = require('express');
const productService = require('../services/productService');
const accessoryService = require('../services/accessoryService');
const { validateProduct } = require('./helpers/productHelpers')

const router = Router();

router.get('/', (req, res) => {
    productService.getAll(req.query)
        .then((products) => res.render('home', { title: 'Browse', products }))
        .catch(() => res.status(500).end())
})

router.get('/create', (req, res) => {
    res.render('create', { title: 'Browse', });
})

router.post('/create', (req, res) => {

    // productService.create(req.body, (err) => {
    //     if(err) {
    //         res.status(400).res.end();
    //     }
    //     res.redirect('/products');
    // });

    productService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(404).end())
})

router.get('/details/:productId', async (req, res) => {

    let product = await productService.getOneWithAccessories(req.params.productId);

    res.render('details', { title: 'Product details', product });
})

router.get('/:productId/attach', async (req, res) => {
    let product = await productService.getOne(req.params.productId);
    let accessories = await accessoryService.getAllWithout(product.accessories);

    res.render('attachAccessory', { product, accessories });
})

router.post('/:productId/attach', (req, res) => {
    productService.attachAccessory(req.params.productId, req.body.accessory)
        .then(() => res.redirect(`/products/details/${req.params.productId}`))
        // .catch(() => console.log('eba si mamata'))
})

module.exports = router;

