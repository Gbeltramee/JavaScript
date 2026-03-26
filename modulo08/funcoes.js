// Função é um bloco de código que pode ser reutilizado para realizar uma tarefa específica. Ela pode receber parâmetros de entrada, executar um conjunto de instruções e retornar um valor de saída. As funções são fundamentais para a organização e modularização do código, permitindo que você escreva código mais limpo, eficiente e fácil de manter.


// Nesse exemplo, a função `saudacao` é definida para receber um parâmetro `nome` e imprimir uma mensagem de saudação no console.
function saudacao(nome) {
    console.log('Olá '+nome)
}

saudacao('Gabriel')


// No exemplo abaixo, a função dobraValor recebe um número como parâmetro, multiplica esse número por 2 e retorna o resultado.
function dobraValor(numero) {
    return numero * 2;
}

const numeroDobrado = dobraValor(5);
console.log(numeroDobrado) // O resultado será 10, pois a função `dobraValor` recebe o número 5, multiplica por 2 e retorna o resultado, que é armazenado na variável `numeroDobrado` e impresso no console.


//Arrow Functions

// As Arrow Functions são uma forma mais concisa de escrever funções em JavaScript. Elas foram introduzidas no ECMAScript 6 (ES6) e oferecem uma sintaxe mais curta e clara para definir funções. As Arrow Functions também têm um comportamento diferente em relação ao `this`, o que pode ser útil em certos contextos.

const saudacao2 = (nome) => {
    console.log('Nome:' + nome)
}

saudacao2('Gabriel')

const dobraValor2 = (numero) => {
    return numero * 2
}

console.log(dobraValor2(4))


//Arrow Function resumida quando temos apenas um argumento
const saudacao3 = nome => console.log('Olá, '+nome)
saudacao3('Gabriel')

const dobraValor3 = numero => numero *2
console.log(dobraValor3(10))


// A diferença entre as funções tradicionais e as Arrow Functions é que as Arrow Functions não possuem seu próprio `this`, `arguments`, `super` ou `new.target`. Em vez disso, elas herdam o valor de `this` do contexto em que foram definidas. Isso pode ser útil para evitar problemas de escopo e tornar o código mais legível. No entanto, é importante lembrar que as Arrow Functions não podem ser usadas como construtoras e não possuem um protótipo.