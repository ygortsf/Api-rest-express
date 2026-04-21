const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefaController');

router.post('/', controller.criar);
router.get('/', controller.listar);
router.get('/:objectId', controller.buscar);
router.put('/:objectId', controller.atualizar);
router.delete('/:objectId', controller.deletar);

module.exports = router;