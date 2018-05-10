const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost';

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('MongoDB Connection Established. At', MONGODB_URI);
    })
    .catch(err => {
        console.log('MongoDB Connection At \'', MONGODB_URI, '\' Error. Please make sure that MongoDB is running.');
    });

exports.Product     = require('./product.js')(mongoose);


