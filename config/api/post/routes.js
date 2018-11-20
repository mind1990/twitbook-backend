const express = require('express');
const router = express.Router();
const ctrl = require('../../../controllers/index');

router.get('/', ctrl.post.index);
router.get('/:id', ctrl.post.show);
router.post('/', ctrl.post.create);
router.put('/:id', ctrl.post.update);
router.delete('/:id', ctrl.post.destroy);

module.exports = router;