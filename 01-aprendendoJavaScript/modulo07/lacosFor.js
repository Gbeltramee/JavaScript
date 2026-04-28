// laço for é uma estrutura de repetição que permite executar um bloco de código várias vezes, com base em uma condição. Ele é composto por três partes: a inicialização, a condição e a atualização.

//Nesse exemplo, o laço `for` inicia a variável `contador` com o valor 1, verifica se `contador` é menor ou igual a 5 e, se for verdadeiro, executa o bloco de código dentro do laço. Após cada iteração, o valor de `contador` é incrementado em 1. O resultado será a impressão dos números de 1 a 5 no console.
for (let contador = 1; contador <= 5; contador++) {
  console.log(contador);
}


// Nesse exemplo, o laço `for` percorre os números de 0 a 15 e verifica se cada número é par (ou seja, se o resto da divisão por 2 é igual a 0). Se for par, ele imprime uma mensagem no console indicando que um número par foi encontrado, juntamente com o número em questão.
for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 == 0){
    console.log('Numero par encontrado: '+numero)
  }
}


// Nesse exemplo, o laço `for` percorre os números de 0 a 15 e verifica se cada número é ímpar (ou seja, se o resto da divisão por 2 é igual a 1). Se for ímpar, ele imprime uma mensagem no console indicando que um número ímpar foi encontrado, juntamente com o número em questão.
for (let numero = 0; numero <= 15; numero++) {
  if (numero % 2 == 1){
    console.log('Numero impar encontrado: '+numero)
  }
}

// O laço for também pode ser usado para iterar sobre strings. Nesse exemplo, o laço percorre cada caractere da string "Olá, mundo!" e imprime cada caractere no console.
const mensagem = "Olá, mundo!"
for (let contador = 0; contador < mensagem.length; contador ++){
    console.log(mensagem[contador])
}
// o .length é usado para obter o comprimento da string, ou seja, o número de caracteres que ela contém. O laço continua enquanto o contador for menor que o comprimento da string, garantindo que cada caractere seja acessado corretamente.


// O laço `for...of` é uma forma mais concisa de iterar sobre elementos de uma coleção, como strings ou arrays. Ele percorre cada elemento da coleção e o atribui à variável `caractere` em cada iteração. No exemplo acima, o laço `for...of` percorre cada caractere da string "Olá, mundo!" e imprime cada caractere no console, assim como o laço `for` tradicional.
for (caractere of mensagem){
    console.log(caractere)
}




// o laço for também pode ser usado para iterar sobre arrays. Nesse exemplo, o laço percorre cada elemento do array `frutas` e imprime cada fruta no console. O `frutas.length` é usado para obter o número de elementos no array, garantindo que o laço percorra todos os elementos corretamente.
const frutas = ['maçã', 'banana', 'laranja']
for (let contador = 0; contador < frutas.length; contador++){
    console.log(frutas[contador])
}


