// 1. Criando um objeto pessoal
// Crie um objeto com seu nome, idade e profissão.

const pessoa = {
    nome: 'Gabriel',
    idade: 19,
    profissao: 'Desenvolvedor'    
}


// 2. Acessando propriedades
// Acesse e exiba o valor da propriedade "nome" no console.

console.log('Nome: ',pessoa.nome)


// 3. Atualizando valores
// Modifique a propriedade "idade" com um novo valor.

pessoa.idade = 20


// 4. Adicionando uma nova propriedade
// Adicione ao objeto uma nova propriedade chamada "cidade".

pessoa.cidade = 'Cariacica'


// 5. Função com objeto
// Crie uma função que receba um objeto pessoa contendo as propriedades nome, idade e profissao.
// A função deve retornar uma frase montada com concatenação de strings, exibindo os dados da pessoa.

const formatarObjeto = (pessoa) => {
    for (const chave in pessoa){
        console.log(chave,':',pessoa[chave])
    }
}

formatarObjeto(pessoa)


// 6. Lista de pessoas
// Crie um array com 3 objetos, cada um representando uma pessoa com nome e idade.

const listaPessoas = [
    {
    nome: 'Gabriel',
    idade: 19
    },
    {
    nome: 'Julia',
    idade: 18
    },
    {
    nome: 'Adeilton',
    idade: 30
    }
]

console.log(listaPessoas[0])

// 7. Filtrando maiores de idade
// Percorra o array e exiba apenas os nomes das pessoas com 18 anos ou mais.

for (const pessoa of listaPessoas) {
  if (pessoa.idade >= 18) {
    console.log(pessoa.nome)
  }
}

// 8. Objeto com método
// Crie um objeto chamado usuario com as propriedades nome e saudacao.
// A propriedade saudacao deve ser uma função que imprime no console uma mensagem fixa, utilizando o nome armazenado no objeto por acesso direto à propriedade.

const usuario = {
    nome: 'Gabriel',
    saudacao: function() {
        console.log('Olá, ' + this.nome)
    }
}

// 9. Listando propriedades com for...in
// Use um laço for...in para listar todas as propriedades e seus valores do objeto pessoal criado no exercício

for (const chave in pessoa){
    console.log('Chave: '+chave)
    console.log('Valor: '+pessoa[chave])
}

// 10. Cálculo de compra
// Crie um objeto produto com preco e quantidade, e calcule o valor total da compra(preco * quantidade).

const produto = {
    preco: 50,
    quantidade: 3
}
const valorTotal = produto.preco * produto.quantidade
console.log('Valor Total da Compra: ', valorTotal)