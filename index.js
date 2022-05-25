const express = require('express');
const app = require('./app');
require('dotenv').config();
const routers = require('./routers/router');

app.use(express.json());

app.use('/', routers);
// não altere esse arquivo, essa estrutura é necessária para à avaliação do projeto

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
