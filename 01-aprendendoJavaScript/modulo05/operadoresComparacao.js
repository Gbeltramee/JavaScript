const idadeReferencia = 18;
const idadeUsuario = 20;
const idadeRefenciaString = "18";

// Operadores de comparação
const comparacao = idadeReferencia == idadeRefenciaString;
console.log("Comparação de igualdade: " + comparacao);

const comparacaoEstrita = idadeReferencia === idadeRefenciaString;
console.log("Comparação de igualdade estrita: " + comparacaoEstrita);

const maiorQue = idadeReferencia > idadeUsuario;
console.log("Comparação de maior que: " + maiorQue);

const menorQue = idadeReferencia < idadeUsuario;
console.log("Comparação de menor que: " + menorQue);

const maiorOuIgual = idadeReferencia >= idadeUsuario;
console.log("Comparação de maior ou igual: " + maiorOuIgual);

const menorOuIgual = idadeReferencia <= idadeUsuario;
console.log("Comparação de menor ou igual: " + menorOuIgual);