const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {

    res.render('add-product', {
        pageTitle: 'Admin',
        isAuthenticated: req.session.isLoggedIn
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        console.log(products);
        res.render('add-product', {
            isAuthenticated: req.session.isLoggedIn
        })
    })
}