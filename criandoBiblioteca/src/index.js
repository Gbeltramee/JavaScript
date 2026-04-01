const fs = require('fs');

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]

console.log(link);

fs.readFile(link, 'utf-8', (erro, texto) => {
  if (erro) {
    console.error(erro);
    return;
  }
  console.log(texto);
});