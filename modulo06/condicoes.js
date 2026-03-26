// Condições nulas ou vazias são consideradas falsas em JavaScript. Portanto, o código dentro do bloco `else` será executado.
const nome = ''
if (nome) {
    console.log('Olá, ' + nome + '!')
} else {
    console.log('Olá, visitante!')
}

// Da mesma forma, uma variável com valor `null` ou `undefined` também é considerada falsa, e o bloco `else` será executado.
const idade = null
if (!idade ){
    console.log('Idade não informada')
}else if (idade >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}