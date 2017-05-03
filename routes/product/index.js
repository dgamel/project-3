const Product = require('../../models/product');
const router = require('express').Router();


router.get('/', function(req, res, next) {
  Product.fetchAll().then((product) => {
    res.json(product);
  })
});



module.exports = router;
