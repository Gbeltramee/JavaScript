const express = require("express");
const livrosRoutes = require('./routes/livros');

const app = express();
const port = 8000;

app.use('/livros', livrosRoutes);

app.listen(port, ()=> {
  console.log('Escutando a porta ' + port);
});