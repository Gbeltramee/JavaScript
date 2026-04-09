//spread operator é um recurso do JavaScript que permite expandir elementos de um array ou propriedades de um objeto em locais onde múltiplos elementos ou propriedades são esperados. Ele é representado por três pontos (...).

const gabriel1 = {
    nome: 'Gabriel',
    idade: 25,
    profissao: 'Desenvolvedor'
}

const gabriel2 = { ...gabriel1, idade: 30, possuiCNH: true } // O operador spread (...) é usado para criar um novo objeto gabriel2, copiando todas as propriedades do objeto gabriel1 e sobrescrevendo a propriedade idade com o valor 30.

console.log('Gabriel 1:', gabriel1) // O resultado será o objeto gabriel1, que tem a propriedade idade com o valor 25.
console.log('Gabriel 2:', gabriel2) // O resultado será o objeto gabriel2, que tem a propriedade idade com o valor 30, enquanto as outras propriedades (nome e profissao) permanecem iguais ao objeto gabriel1.


const { nome, ...resto } = gabriel1 // O operador rest (...) é usado para extrair a propriedade nome do objeto gabriel1 e armazená-la na variável nome, enquanto as outras propriedades (idade e profissao) são agrupadas em um novo objeto chamado resto.

console.log('Nome:', nome) // O resultado será a string 'Gabriel', que é o valor da propriedade nome do objeto gabriel1.
console.log('Resto:', resto) // O resultado será um objeto contendo as propriedades idade e profissao do objeto gabriel1, ou seja, { idade: 25, profissao: 'Desenvolvedor' }.