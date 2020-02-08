const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Express Server Running');
});

module.exports = router;