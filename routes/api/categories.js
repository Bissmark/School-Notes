const express = require('express');
const router = express.Router();
const categoriesController = require('../../controllers/api/categories');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, categoriesController.create);
router.get('/', ensureLoggedIn, categoriesController.index);

module.exports = router;