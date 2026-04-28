const pessoa = {
    nome: 'Gabriel',
    idade: 25,
    stack: ['JavaScript', 'Python', 'Java'],
    nacionalidade: 'Brasileiro'
}

for (const chave in pessoa){
    console.log('Chave: '+chave)
    console.log('Valor: '+pessoa[chave])
}

const chaves = Object.keys(pessoa)
const valores = Object.values(pessoa)
const entradas = Object.entries(pessoa)

console.log('Chaves :',chaves)
console.log('Valores :',valores)
console.log('Entradas :',entradas)