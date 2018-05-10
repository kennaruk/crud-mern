var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var todb = require('../models/query')

router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.send('Express Tests');
});

router.get('/getallproducts', (req, res, next) => {
  todb.getAllProduct((err, products) => {
    if (err) {
      res.json({
        success: false,
        message: err
      })
    } else {
      res.json({
        success: true,
        message: "Get Products Success",
        data: products
      })
    }
  })

});

router.post('/addproduct', (req, res, next) => {
  let payload = {
    name: req.body.name,
    description: req.body.description,
    stock: req.body.stock,
    price: req.body.price
  };

  todb.addProduct(payload, (err) => {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    } else {
      res.json({
        success: true,
        message: 'Add product Success'
      })
    }
  })

});

router.post('/update/product', (req, res, next) => {
  let payload = {
    _id: req.body._id,
    name: req.body.name,
    description: req.body.description,
    stock: req.body.stock,
    price: req.body.price
  };

  todb.updateProduct(payload, (err) => {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    } else {
      res.json({
        success: true,
        message: 'update product Success'
      })
    }
  })
})

router.delete('/delete/product', (req, res, next) => {
  let id = req.body._id;

  todb.deleteProduct(id, (err) => {
    if (err) {
      res.json({
        success: false,
        message: err
      });
    } else {
      res.json({
        success: true,
        message: 'Delete product Success'
      })
    }
  })

})

module.exports = router;
