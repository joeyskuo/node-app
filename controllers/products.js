exports.getAddProduct = (req, res, next) => {
    res.status(200).render('add-product', {pageTitle: 'Admin'});
};
