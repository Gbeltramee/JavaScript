// 1. Lista de nomes
// Crie um array com 5 nomes. Use for para imprimir cada nome no console, um por linha.

const nomes = ['Gabriel', 'Maria', 'João', 'Ana', 'Pedro']

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i])
}

// 2. Adicionar e remover itens
// Comece com um array de frutas. Adicione uma nova fruta ao final com push() e remova a primeira com shift(). Mostre o array antes e depois.

const frutas = ['Uva','Banana', 'Maçã', 'Pera', 'Abacaxi']
console.log('Frutas Antes: ' + frutas)

frutas.push('Melancia')

frutas.shift()

console.log('Frutas Depois: ' + frutas)


// 3. Contar itens do array
// Crie um array com nomes de cidades e exiba no console a quantidade total de itens usando .length.

cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre']
console.log('Total de cidades: ' + cidades.length)


// 4. Somar todos os números
// Crie um array com 10 números. Use for para somar todos os valores e mostrar o total no final.

const numeros = [1,60,15,20,5]
let resultado = 0
for (let i = 0; i < numeros.length; i++){
  resultado += numeros[i]
}

console.log('Somatório total: ' + resultado)


// 5. Média de notas
// Crie um array com 4 notas. Some os valores e calcule a média, exibindo uma mensagem de "Aprovado" ou "Reprovado" com base na média >= 7.

const notas = [4,7,10,5]
let notasTotais = 0

for (let i = 0; i < notas.length; i++){
  notasTotais += notas[i]
}
const media = notasTotais / notas.length

if (media >= 7 ){
  console.log('Aprovado, média geral: '+media)
}else{
  console.log('Reprovado, média geral: '+media)
}


// 6. Mensagens personalizadas com forEach
// Crie um array com nomes de usuários. Use forEach para imprimir "Olá, [nome]!" para cada um.

const nomes2 = ['Gabriel', 'Maria', 'João', 'Ana', 'Pedro']

nomes2.forEach((nome)=>{
  console.log('Olá, '+nome)
})


// 7. Descontos com map
// Crie um array com preços de produtos. Use map para aplicar 10% de desconto em cada um e mostre os preços com desconto.

const precos = [100, 200, 300, 400, 500]

const precosComDesconto = precos.map((preco) =>{
  return preco * 0.9
})

console.log('Preços normais: '+precos)
console.log('Preços Com Desconto: '+precosComDesconto)


// 8. Filtrar valores altos
// Crie um array com idades. Use filter para retornar apenas as idades maiores ou iguais a 18 e exiba o resultado.

const idades = [15, 22, 30, 17, 18, 25]

const idadesAdultas = idades.filter((idade) => {
  return idade >= 18
})

console.log('Idades Adultas: ' + idadesAdultas)


// 9. Simulando carrinho de compras
// Crie um array com os preços de produtos em um carrinho de compras.
// Utilize um laço for ou for...of para calcular o valor total da compra.

// Em seguida, aplique um desconto de 20% sobre o total e exiba o valor final no console.

const carrinho = [50, 100, 150, 200, 250]
let valorTotal = 0

for (const valor of carrinho){
  valorTotal += valor
}

const valorcomDesconto = valorTotal*0.8

console.log('Valor total: ' + valorTotal)
console.log('Valor com 20% de desconto: ' + valorcomDesconto)


// Crie dois arrays:

// um array com nomes de tarefas
// outro array com valores booleanos indicando se a tarefa foi concluída (true ou false)
// Utilize o método filter para criar um novo array contendo apenas as tarefas que não foram concluídas.
// Exiba a lista de tarefas pendentes no console.

const tarefas = ['Lavar a louça', 'Fazer a lição de casa', 'Limpar o quarto', 'Comprar mantimentos']
const tarefasConcluidas = [true, false, true, false]

const tarefasPendentes = tarefas.filter((tarefa, index) => {
  return !tarefasConcluidas[index]
}
)

console.log('Tarefas Pendentes: ' + tarefasPendentes)