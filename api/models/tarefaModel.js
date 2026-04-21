const { v4: uuidv4 } = require('uuid');
const pool = require('../db/db'); // ajuste se já existir

async function create({ descricao, concluida }) {
  const objectId = uuidv4();

  const result = await pool.query(
    'INSERT INTO tarefas (object_id, descricao, concluida) VALUES ($1, $2, $3) RETURNING *',
    [objectId, descricao, concluida]
  );

  return result.rows[0];
}

async function findAll() {
  const result = await pool.query('SELECT * FROM tarefas ORDER BY descricao');
  return result.rows;
}

async function findById(objectId) {
  const result = await pool.query(
    'SELECT * FROM tarefas WHERE object_id = $1',
    [objectId]
  );
  return result.rows[0];
}

async function update(objectId, { descricao, concluida }) {
  const result = await pool.query(
    `UPDATE tarefas 
     SET descricao = COALESCE($1, descricao),
         concluida = COALESCE($2, concluida)
     WHERE object_id = $3
     RETURNING *`,
    [descricao, concluida, objectId]
  );

  return result.rows[0];
}

async function remove(objectId) {
  const result = await pool.query(
    'DELETE FROM tarefas WHERE object_id = $1 RETURNING *',
    [objectId]
  );

  return result.rows[0];
}

module.exports = {
  create,
  findAll,
  findById,
  update,
  remove
};