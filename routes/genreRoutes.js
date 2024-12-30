const express = require('express');
const router = express.Router();
const genreController = require('../controller/genrecontroller');

// Middleware for overriding methods
const methodOverride = require('method-override');
router.use(methodOverride('_method'));


router.get('/',genreController.getAllGenre);
router.get('/create',genreController.renderCreateForm);
router.post('/',genreController.createGenre);
router.delete('/:id', genreController.deleteGenre); // Delete product

module.exports = router;