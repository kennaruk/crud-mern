var ObjectId = require('mongoose').Types.ObjectId;

//Models
var Models = require('../');
var Product = Models.Product;

exports.getAllProduct = (cb) => { 
    console.log('Api Get All Product')
    Product.find(cb);
}

exports.addProduct = (params , cb) =>{
    console.log('Api addProduct')
    let product = new Product();
    product.productid = params.productid;
    product.name =params.name;
    product.description = params.description;
    product.stock = params.stock;
    product.price = params.price;

    console.log(product)
    product.save((err) =>{
        if(err){
            cb(err)
        }else{
            cb()
        }
    })
}

exports.updateProduct = (payload, cb) => {
    console.log('Api UpdateProduct')
    Product.findOne({_id: payload._id}, (err, product) => {
        if(err)
            cb(err)
        else {
            product._id = payload._id;
            product.name = payload.name;
            product.description = payload.description;
            product.price = payload.price;
            product.stock = payload.stock;
            product.save().then(() => cb())
            .catch(err => cb(err));
        }
    });
    // Product.update({_id:id},params)
    // .then(()=>{
    //      cb();
    // })
    // .catch(err =>{
    //     cb(err);
    // })
}


exports.deleteProduct = ( id, cb) =>{
    console.log('Api DeleteProduct')
    Product.remove({_id:id})
     .then(()=>{
         cb();
     })
     .catch(err =>{
         cb(err);
     })
 }


