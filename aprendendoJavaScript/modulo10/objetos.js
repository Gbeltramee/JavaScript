// Um objeto é uma coleção de propriedades, onde cada propriedade é uma associação entre um nome (chave) e um valor. Os objetos são usados para representar entidades do mundo real, como pessoas, livros, carros, etc. Eles permitem organizar e estruturar dados de forma mais eficiente.

const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor',
    temCNH : true
}

pessoa.sobrenome = 'Silva' // Adicionando uma nova propriedade ao objeto pessoa
console.log('Pessoa:', pessoa)

const livro = {
    titulo: 'O Senhor dos Anéis',
    anoPublicacao: 1954,
    genero: 'Fantasia'
}

livro.editora = 'HarperCollins' // Adicionando uma nova propriedade ao objeto livro
livro.idiomas = ['Inglês', 'Português', 'Espanhol'] // Adicionando uma nova propriedade ao objeto livro, que é um array de idiomas
console.log('Livro:', livro)

livro.idiomas.push('Francês') // Adicionando um novo idioma ao array de idiomas do objeto livro
console.log('Idiomas do livro:', livro.idiomas)

console.log('Livro Antes da Modificação:', livro)

delete livro.anoPublicacao // Removendo a propriedade anoPublicacao do objeto livro
console.log('Livro Depois da Modificação:', livro)


const autor = {
    nome: 'J.R.R. Tolkien',
    nacionalidade: 'Britânico',
    idade: 81,
}

livro.autor = autor // Adicionando o objeto autor como uma propriedade do objeto livro
console.log('Livro com Autor:', livro)
console.log('Nome do Autor:', livro.autor.nome) // Acessando a propriedade nome do objeto autor, que é uma propriedade do objeto livro