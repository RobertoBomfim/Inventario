const express = require('express');
const router = express.Router();

const InventarioController = require('../controller/InventarioController');
const InventarioValidation = require('../middleware/InventarioValidation');

router.post('/', InventarioValidation, InventarioController.create);
router.put('/:id', InventarioValidation, InventarioController.update);
router.delete('/:id', InventarioController.delete);
router.get('/:id/:patrimonio', InventarioController.show);

router.get('/all', InventarioController.all);

module.exports = router;