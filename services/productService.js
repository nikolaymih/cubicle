const Cube = require('../models/cube');
const productData = require('../data/productData');
const mongoose = require('mongoose');
const cube = require('../models/cube');


async function getAll(query) {
    // let result = productData.getAll();
    // let result = Cube.getAll;
    let result = await Cube.find({}).lean();

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

async function getOne(id) {
    // return productData.getOne(id)
    // return Cube.getOne(id);

    let cube = await Cube.findById(id).lean();

    return cube;
}

function create(data) {
    let cube = new Cube(data);

    return cube.save(); 
    // този сейф е вграден в монгуус, не е нашият от модела.

    // fs.writeFile(path.join(__dirname, '/../config/products.json'), JSON.stringify(productsData), callback);

}

module.exports = {
    getAll,
    getOne,
    create
};