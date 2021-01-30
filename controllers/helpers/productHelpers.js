exports.validateProduct = function (req, res, next) {
    let isValid = true;

    if (!req.body.imageUrl) {
        isValid = false;
    }

    if (isValid) {
        next();
    }
}
