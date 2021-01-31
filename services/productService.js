const Cube = require('../models/cube');
const productData = require('../data/productData');
const mongoose = require('mongoose');


function getAll(query) {
    let result = productData.getAll();
    // let result = Cube.getAll;

    if (query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search))
    }

    if (query.from) {
        result = result.filter(x => Number(x.level) >= query.from)
    }

    if (query.to) {
        result = result.filter(x => Number(x.level) <= query.to)
    }
    return result;
}

function getOne(id) {
    return productData.getOne(id)
    // return Cube.getOne(id);
}

function create(data) {
    let cube = new Cube(data);
    console.log(cube);

    // fs.writeFile(path.join(__dirname, '/../config/products.json'), JSON.stringify(productsData), callback);

    return cube.save(); 
    // този сейф е вграден в монгуус, не е нашият от модела.
}

module.exports = {
    getAll,
    getOne,
    create
};