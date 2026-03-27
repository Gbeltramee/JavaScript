// 1. Função de saudação
// Crie uma função chamada saudacao que exibe a mensagem "Olá! Seja bem-vindo(a)!" ao ser chamada.

const saudacao = () => {
  console.log('Olá, seja bem-vindo(a)')
}

saudacao()


// 2. Função com parâmetros
// Crie uma função apresentarPessoa(nome, idade) que exibe no console: "Olá, meu nome é [nome] e tenho [idade] anos."

const apresentarPessoa = (nome,idade) => {
  console.log('Olá, meu nome é '+nome+' e tenho '+idade+' anos.')
}

apresentarPessoa('Gabriel',19)


// 3. Cálculo de IMC
// Crie uma função chamada calcularIMC que receba dois parâmetros: peso e altura.
// A função deve calcular o IMC utilizando a fórmula:

// IMC = peso / (altura * altura)

// A função deve retornar o valor do IMC.
// Depois, utilize o retorno da função para exibir no console uma mensagem com o resultado.

const calcularIMC = (peso,altura) => {
  return peso / (altura * altura)
}
const imc = calcularIMC(65, 1.83)
console.log('Seu imc é: '+ imc)


// 4. Verificar aprovação
// Crie uma função verificarAprovacao(nota) que retorna "Aprovado" se nota >= 7 ou "Reprovado" caso contrário.

const verificarAprovacao = (nota) => {
  return nota >= 7 ? 'Aprovado': 'Reprovado'
} 
const situacao = verificarAprovacao(7)
console.log('Sua situação é ' + situacao)


// 5. Número par ou ímpar
// Crie uma função ehPar(numero) que retorna true se o número for par e false se for ímpar. Teste a função com diferentes valores.

const ehPar = (numero) => {
  return numero % 2 == 0? true : false
}

const numero = 8
const numero2 = 9
console.log('O número '+numero+' é par? '+ehPar(numero))
console.log('O número '+numero2+' é par? '+ehPar(numero2))


// 6. Função soma
// Crie uma função que recebe dois números e retorna a soma deles. Exiba o resultado no console com uma frase completa.

const soma = (num1,num2) =>{
  return num1+num2
}

const num1 = 9
const num2 = 1
console.log('A soma entre '+num1+' e '+num2+' é '+soma(num1,num2))


// 7. Reutilizando código
// Reescreva o exercício da calculadora de troco utilizando uma função chamada calcularTroco.
// A função deve receber dois parâmetros: valorCompra e valorPago.

// A função deve:

// calcular o valor do troco
// retornar o valor calculado
// Depois, utilize o retorno da função para exibir o valor do troco no console.



console.log("Bem vindo a calculadora de troco")

const calcularTroco = (valorCompra,valorPago)=>{
  return valorPago = valorCompra
}
const valorCompra = 25
const valorPago = 50
const troco = calcularTroco(valorCompra,valorPago)

if (troco > 0) {
  console.log('Compra aprovada! Troco a ser dado: '+troco)
} else if (troco == 0){
  console.log('Compra aprovada! Não há troco a ser dado.')
} else {
  console.log('Compra rejeitada! Falta '+troco+' reais para completar o pagamento.')
}


// 8. Arrow function
// Transforme a função do exercício 6 em uma arrow function com sintaxe reduzida.

// já fiz em arrow function


// Crie uma função executarAcao(acao) que recebe uma função como parâmetro e a executa. Teste passando uma função que imprime "Executando ação!".

 const executarAcao = (acao) => {
   acao();
 }

 const imprimeAcao = () => {
   console.log('Executando ação!')
 }

executarAcao(imprimeAcao)