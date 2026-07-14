const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  try {
    throw new Error('Erro simulado'); // Simulando um erro para teste
    res.send('Listagem de livros');
  } catch (error) {
    res.status(500).send('Erro ao listar livros');
  }
});

router.post('/', (req, res) => {
  try {
    res.send('Novo livro adicionado');
  } catch (error) {
    res.status(500).send('Erro ao adicionar livro');
  }
});

router.put('/:id', (req, res) => {
  try {
    res.send(`Livro com id ${req.params.id} atualizado`);
  } catch (error) {
    res.status(500).send('Erro ao atualizar livro');
  }
});

router.delete('/:id', (req, res) => {
  try {
    res.send(`Livro com id ${req.params.id} removido`);
  } catch (error) {
    res.status(500).send('Erro ao remover livro');
  }
});

module.exports = router;