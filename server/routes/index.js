const express = require('express');
const controller = require('../controller/index');
const router = express.Router();

router.get(
    '/cart',
    controller.getProducts
);

router.use((err, req, res, next) => {
    console.log('ERROR LOG', JSON.stringify(err, null, 4));
});

module.exports = router;
