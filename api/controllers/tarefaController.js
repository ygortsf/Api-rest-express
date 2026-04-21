const service = require('../services/tarefaService');

async function criar(req, res) {
  try {
    const tarefa = await service.criarTarefa(req.body);
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(err.status || 400).json({ error: err.message });
  }
}

async function listar(req, res) {
  try {
    const tarefas = await service.listarTarefas();
    res.json(tarefas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function buscar(req, res) {
  try {
    const tarefa = await service.buscarTarefa(req.params.objectId);
    res.json(tarefa);
  } catch (err) {
    res.status(err.status || 404).json({ error: err.message });
  }
}

async function atualizar(req, res) {
  try {
    const tarefa = await service.atualizarTarefa(
      req.params.objectId,
      req.body
    );
    res.json(tarefa);
  } catch (err) {
    res.status(err.status || 404).json({ error: err.message });
  }
}

async function deletar(req, res) {
  try {
    await service.deletarTarefa(req.params.objectId);
    res.json({ message: "Tarefa removida com sucesso" });
  } catch (err) {
    res.status(err.status || 404).json({ error: err.message });
  }
}

module.exports = {
  criar,
  listar,
  buscar,
  atualizar,
  deletar
};