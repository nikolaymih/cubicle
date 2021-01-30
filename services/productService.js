const Cube = require('../models/cube');
const uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');

const productsData = require('../config/products.json');

function getAll() {
    return productsData;
}

function getOne(id) {
    return productsData.find(x => x.id === id)
}

function create(data, callback) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    productsData.push(cube);

    fs.writeFile(path.join(__dirname, '/../config/products.json'), JSON.stringify(productsData), callback);
}

module.exports = {
    getAll,
    getOne,
    create
};