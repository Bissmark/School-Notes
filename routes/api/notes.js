const express = require('express');
const router = express.Router();
const notesController = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, notesController.index);
router.post('/', ensureLoggedIn, notesController.create);
router.get('/notes/:id', ensureLoggedIn, notesController.show);
router.delete('/:id', ensureLoggedIn, notesController.delete);
router.put('/:id', ensureLoggedIn, notesController.update);

module.exports = router;