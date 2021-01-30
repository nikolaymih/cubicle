const Cube = require('../models/cube');
const uniqid = require('uniqid');
const productData = require('../data/productData');

function getAll(query) {
    let result = productData.getAll();

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
    return productData.getOne(id);
}

function create(data, callback) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    // fs.writeFile(path.join(__dirname, '/../config/products.json'), JSON.stringify(productsData), callback);

    return productData.create(cube)
}

module.exports = {
    getAll,
    getOne,
    create
};