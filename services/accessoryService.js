const Accessory = require('../models/accessory');

function getAll() {
    return Accessory.find().lean();
}

function create(data) {
    let accessory = new Accessory(data);

    return accessory.save();
}

module.exports = {
    getAll,
    create,
}