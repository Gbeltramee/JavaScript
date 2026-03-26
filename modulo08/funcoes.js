// Função é um bloco de código que pode ser reutilizado para realizar uma tarefa específica. Ela pode receber parâmetros de entrada, executar um conjunto de instruções e retornar um valor de saída. As funções são fundamentais para a organização e modularização do código, permitindo que você escreva código mais limpo, eficiente e fácil de manter.


// Nesse exemplo, a função `saudacao` é definida para receber um parâmetro `nome` e imprimir uma mensagem de saudação no console.
function saudacao(nome) {
    console.log('Olá '+nome)
}

// Ao chamar a função com o argumento 'Gabriel', a mensagem "Olá Gabriel" será exibida no console.
saudacao('Gabriel')


// No exemplo abaixo, a função dobraValor recebe um número como parâmetro, multiplica esse número por 2 e retorna o resultado.
function dobraValor(numero) {
    return numero * 2;
}

const numeroDobrado = dobraValor(5);
console.log(numeroDobrado) // O resultado será 10, pois a função `dobraValor` recebe o número 5, multiplica por 2 e retorna o resultado, que é armazenado na variável `numeroDobrado` e impresso no console.