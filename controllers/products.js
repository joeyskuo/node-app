const Product = require('../models/Product');

exports.getAddProduct = (req, res, next) => {

    const isLoggedIn = req.get('Cookie') ? req.get('Cookie').includes('loggedIn=true') : false;

    res.render('add-product', {
        pageTitle: 'Admin',
        isAuthenticated: isLoggedIn
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
            isAuthenticated: req.isLoggedIn
        })
    })
}