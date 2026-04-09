// Condicional simples
const idade = 17
if (idade >= 18) {
    console.log('Você é maior de idade')
}else {
    console.log('Você é menor de idade')
}

// Condicional composta
const hora = 20 
if (hora < 12) {
    console.log('Bom dia')
} else if (hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}

// Condicional ternária, a mesma coisa do código acima, porém de forma mais resumida
hora < 12 ? console.log('Bom dia') : 
  hora < 18 ? console.log('Boa tarde') : 
    console.log('Boa noite') 