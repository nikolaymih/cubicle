const Accessory = require('../models/accessory');

function getAll() {
    return Accessory.find().lean();
}

function getAllWithout(ids) {
    return Accessory.find({ _id: { $nin: ids } }).lean();
                        
}

function create(data) {
    let accessory = new Accessory(data);

    return accessory.save();
}

module.exports = {
    getAll,
    getAllWithout,
    create,
}