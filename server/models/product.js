module.exports = function(mongoose) {
    const Joigoose = require('joigoose')(mongoose);
    const Joi = require('joi');

    var joiProductSchema = Joi.object({
        name: Joi.string(),
        description: Joi.string(),
        price: Joi.number(),
        stock: Joi.number(),
    });

    var mongooseProductSchema = new mongoose.Schema(Joigoose.convert(joiProductSchema));
    return mongoose.model('Product', mongooseProductSchema);
}