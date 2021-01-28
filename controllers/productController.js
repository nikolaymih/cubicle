const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'Browse'});
})

router.get('/create', (req, res) => {
    res.render('create', {title: 'Browse'});
})

router.get('/details/:productId', (req, res) => {
    res.render('details', {title: 'Product details'});
})

module.exports = router;

