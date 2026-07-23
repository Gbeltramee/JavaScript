const fs = require('fs');

function getTodosLivros() {
  return JSON.parse(fs.readFileSync('livros.json', 'utf-8'));
}

function getLivroPorId(id) {
  const livros = getTodosLivros();
  const idNum = Number(id);
  const livroFiltrado = livros.find(livro => livro.id === idNum);
  return livroFiltrado;
}

function insereLivro(novoLivro) {
  const livros = getTodosLivros();
  livros.push(novoLivro);
  fs.writeFileSync('livros.json', JSON.stringify(livros));
}

function atualizaLivro(modificacoes) {
  let livros = getTodosLivros();
  const indiceModificado = livros.findIndex(livro => livro.id === modificacoes.id);
  const conteudoMudado = {...livros[indiceModificado], ...modificacoes};
  livros[indiceModificado] = conteudoMudado;
  fs.writeFileSync('livros.json', JSON.stringify(livros));
  return conteudoMudado;
}

function deletaLivro(id) {
  let livros = getTodosLivros();
  const indiceDeletado = livros.findIndex(livro => livro.id === Number(id));
  if (indiceDeletado !== -1) {
    livros.splice(indiceDeletado, 1);
    fs.writeFileSync('livros.json', JSON.stringify(livros));
    return true;
  }
  return false;
}

module.exports = {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  atualizaLivro,
  deletaLivro
};