const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {
    res.status(200).render('add-product', {pageTitle: 'Admin'});
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}
