const express = require('express');
const router = express.Router();
const controller = require('../controllers/tarefaController');

router.post('/tarefas', controller.criar);
router.get('/tarefas', controller.listar);
router.get('/tarefas/:objectId', controller.buscar);
router.put('/tarefas/:objectId', controller.atualizar);
router.delete('/tarefas/:objectId', controller.deletar);

module.exports = router;