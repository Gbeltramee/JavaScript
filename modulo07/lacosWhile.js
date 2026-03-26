// laços while são estruturas de repetição que permitem executar um bloco de código enquanto uma condição for verdadeira. Eles são compostos por uma condição e um bloco de código a ser executado.


// Nesse exemplo, o laço `while` inicia a variável `contador` com o valor 1 e continua executando o bloco de código enquanto `contador` for menor ou igual a 5. A cada iteração, o valor de `contador` é incrementado em 1. O resultado será a impressão dos números de 1 a 5 no console.
let contador = 1
while (contador <= 5) {
    console.log(contador)
    contador++
}


// O laço `do...while` é semelhante ao `while`, mas a condição é verificada após a execução do bloco de código. Isso significa que o bloco de código será executado pelo menos uma vez, mesmo que a condição seja falsa desde o início. No exemplo acima, o número 0 será impresso no console antes de verificar a condição `numero <= 5`. O laço continuará executando enquanto a condição for verdadeira, resultando na impressão dos números de 0 a 5 no console.
let numero = 0
do {
    console.log(numero)
    numero++
} while (numero <= 5)

//Casos de uso para cada tipo de laço:

// Use `while` quando você não souber quantas vezes o bloco de código precisa ser executado, e a repetição deve continuar enquanto uma condição for verdadeira. Por exemplo, ler dados do usuário até que uma entrada válida seja fornecida.
// Use `do...while` quando você quiser garantir que o bloco de código seja executado pelo menos uma vez, independentemente da condição. Por exemplo, exibir um menu para o usuário e solicitar uma escolha, garantindo que o menu seja mostrado pelo menos uma vez antes de verificar a escolha do usuário.

//Erros comuns ao usar while e do...while:

// Esquecer de atualizar a variável de controle dentro do laço, o que pode levar a um loop infinito. Por exemplo, se você esquecer de incrementar o contador em um laço `while`, ele continuará executando indefinidamente.
// Usar a condição errada, o que pode resultar em um comportamento inesperado. Por exemplo, se você usar `contador < 5` em vez de `contador <= 5`, o número 5 não será impresso no console.
// Não fornecer uma condição de parada adequada, o que pode levar a um loop infinito. Por exemplo, se você usar uma condição que nunca se torna falsa, como `while (true)`, o laço continuará executando para sempre, a menos que haja uma instrução de quebra (`break`) dentro do bloco de código.