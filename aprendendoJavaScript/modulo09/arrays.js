// Arrays são estruturas de dados que armazenam uma coleção de elementos, podendo ser de diferentes tipos. Eles são usados para organizar e manipular dados de forma eficiente. Em JavaScript, os arrays são objetos que possuem métodos e propriedades para facilitar o trabalho com eles.

const frutas = ['Uva','Banana', 'Maçã', 'Pera', 'Abacaxi', 'Melancia', 'Laranja', 'Limão', 'Manga', 'Morango']
// uva = 0
// banana = 1
// maçã = 2

console.log(frutas)

// console.log('Primeira fruta:', frutas[0]) // Acessando o primeiro elemento do array, que é 'Uva'
// console.log('Segunda fruta:', frutas[1]) // Acessando o segundo elemento do array, que é 'Banana'
// console.log('Terceira fruta:', frutas[2]) // Acessando o terceiro elemento do array, que é 'Maçã'

// console.log('Total de frutas: '+ frutas.length)

// frutas.push('Abacate') // O método push() é usado para adicionar um novo elemento ao final do array. Neste caso, 'Abacate' é adicionado como a última fruta da lista.

// console.log('Total após adicionar Abacate:', frutas.length)

// console.log('Ultima fruta: '+frutas[frutas.length - 1])

// frutas.splice(2,1)

// console.log(frutas)

for (let i = 0; i < frutas.length; i++) { // O loop for é usado para iterar sobre os elementos do array. Ele começa com a variável i inicializada em 0, e continua enquanto i for menor que o comprimento do array (frutas.length). A cada iteração, i é incrementado em 1.
  console.log(frutas[i])
}

console.log('Usando forEach')

frutas.forEach((valor) => { // O método forEach() é usado para iterar sobre os elementos do array. Ele recebe uma função de callback que é executada para cada elemento do array. A função de callback recebe o valor do elemento como argumento.
  console.log(valor)
})

console.log('Usando forOf')

for (const fruta of frutas) { // O loop for...of é uma forma mais concisa de iterar sobre os elementos de um array. Ele percorre cada elemento do array e atribui o valor do elemento à variável fruta em cada iteração.
  console.log(fruta)
}