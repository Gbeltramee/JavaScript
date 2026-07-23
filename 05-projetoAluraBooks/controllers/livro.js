const { put } = require('../routes/livros');
const { getTodosLivros, getLivroPorId, insereLivro, atualizaLivro, deletaLivro } = require('../services/livro');

function getLivros(req, res) {
  try {
    const livros = getTodosLivros();
    res.status(200).send(livros);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const livro = getLivroPorId(id);
      res.status(200).send(livro);
    } else {
      res.status(422).send('Id inválido');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function postLivro(req, res) {
  try {
    const novoLivro = req.body;
    insereLivro(novoLivro);
    res.status(201).send('Novo livro adicionado');
  } catch (error) {
    res.status(500).send(error.message);
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id;
    if (id && Number(id)) {
      const body = req.body;
      const livroAtualizado = atualizaLivro({ id: Number(id), ...body });
      res.status(200).send(livroAtualizado);
    } else {
      res.status(422).send('Id inválido');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
} 

function deleteLivro(req, res) {
  try {
    const id = req.params.id;
    const sucesso = deletaLivro(id);
    if (sucesso) {
      res.status(200).send(`Livro com id ${id} removido`);
    } else {
      res.status(404).send(`Livro com id ${id} não encontrado`);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro
};