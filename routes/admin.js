const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getAddProduct);
router.get('/products', productsController.getProducts);
router.post('/add-product', productsController.postAddProduct);

module.exports = router;