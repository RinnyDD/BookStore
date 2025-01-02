const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexcontroller');

// Middleware for overriding methods
const methodOverride = require('method-override');
router.use(methodOverride('_method'));

router.get('/',indexController.getListProduct);
router.get('/shop',indexController.shopForm);
// router.get('/:id',indexController.getListProduct);


module.exports = router;