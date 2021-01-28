const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'Browse'});
})

router.get('/about', (req, res) => {
    res.render('about', {title: 'Browse'});
})


module.exports = router;