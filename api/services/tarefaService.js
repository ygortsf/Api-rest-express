const model = require('../models/tarefaModel');

async function criarTarefa(data) {
  if (!data.descricao) {
    throw new Error("Descrição é obrigatória");
  }

  return await model.create({
    descricao: data.descricao,
    concluida: data.concluida ?? false
  });
}

async function listarTarefas() {
  return await model.findAll();
}

async function buscarTarefa(objectId) {
  const tarefa = await model.findById(objectId);

  if (!tarefa) {
    const error = new Error("Tarefa não encontrada");
    error.status = 404;
    throw error;
  }

  return tarefa;
}

async function atualizarTarefa(objectId, data) {
  const tarefa = await model.update(objectId, data);

  if (!tarefa) {
    const error = new Error("Tarefa não encontrada");
    error.status = 404;
    throw error;
  }

  return tarefa;
}

async function deletarTarefa(objectId) {
  const tarefa = await model.remove(objectId);

  if (!tarefa) {
    const error = new Error("Tarefa não encontrada");
    error.status = 404;
    throw error;
  }

  return tarefa;
}

module.exports = {
  criarTarefa,
  listarTarefas,
  buscarTarefa,
  atualizarTarefa,
  deletarTarefa
};