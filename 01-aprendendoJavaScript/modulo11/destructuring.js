const pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Engenheiro'
}

const {nome, profissao} = pessoa

console.log('Nome:', nome) // O resultado será a string 'João', que é o valor da propriedade nome do objeto pessoa.
console.log('Profissão:', profissao) // O resultado será a string 'Engenheiro', que é o valor da propriedade profissao do objeto pessoa.

const saudacao = ({nome, profissao}) => {
    console.log(`Olá, meu nome é ${nome} e trabalho como ${profissao}.`) // O resultado será a string 'Olá, meu nome é João e trabalho como Engenheiro.', utilizando os valores das propriedades nome e profissao do objeto pessoa.
}

saudacao(pessoa)