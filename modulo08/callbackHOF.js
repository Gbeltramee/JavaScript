// HOF (Higher-Order Function) é uma função que recebe outra função como argumento ou retorna uma função como resultado. Elas são úteis para criar funções mais flexíveis e reutilizáveis, permitindo que você passe comportamentos como parâmetros e componha funções de maneira modular.

// Callback é uma função que é passada como argumento para outra função e é executada após a conclusão

const calcular = (numero1, numero2,operacao) =>{ 

  return operacao(numero1,numero2)
}

const soma = (numero1,numero2) => { // Função de callback que realiza a soma de dois números
  return numero1+numero2
}

const divisao = (numero1,numero2) => { // função de callback que realiza a divisão de dois números
  return numero1/numero2
}

const resutadoSoma = calcular(10,2,soma)
const resutadoDivisão = calcular(10,2,divisao)

console.log(resutadoSoma)
console.log(resutadoDivisão)