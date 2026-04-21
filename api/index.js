const express = require('express');
const cors = require('cors');

const tarefaRoutes = require('./routes/tarefas');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API rodando na Vercel');
});

app.use('/', tarefaRoutes);
app.listen(3000,(req,res)=>{
    console.log('oi')
})
module.exports = app;