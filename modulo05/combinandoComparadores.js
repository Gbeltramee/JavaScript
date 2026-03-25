const idade = 15
const maiorDeIdade = idade >= 18
const possuiCNH = false

const podeDirigir = maiorDeIdade && possuiCNH // O operador && (AND) retorna true se ambos os operandos forem verdadeiros
console.log("Pode dirigir: " + podeDirigir)

const podeViajarSozinho = maiorDeIdade || possuiCNH // O operador || (OR) retorna true se pelo menos um dos operandos for verdadeiro
console.log("Pode viajar sozinho: " + podeViajarSozinho)

const precisaAcompanhante = !maiorDeIdade // O operador ! (NOT) inverte o valor lógico do operando
console.log("Precisa de acompanhante: " + precisaAcompanhante)

//AND &&
//OR ||
//NOT !