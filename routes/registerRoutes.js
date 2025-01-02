const express = require('express');
const router = express.Router();
const registerController = require('../controller/registercontroller');

// Middleware for overriding methods
const methodOverride = require('method-override');
router.use(methodOverride('_method'));


// router.get('/',genreController.getAllGenre);
router.get('/',registerController.renderCreateForm);
router.post('/',registerController.createGenre);
// router.delete('/:id', genreController.deleteGenre); // Delete product

module.exports = router;