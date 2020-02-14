const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).render('add-product', {pageTitle: 'Admin'});
});

module.exports = router;