// Funções globais são funções que estão disponíveis em todo o ambiente de execução do JavaScript. Elas podem ser usadas sem a necessidade de importação ou definição prévia. Alguns exemplos de funções globais incluem `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`, `console.log`, entre outras.

const saudacao = (nome) => console.log("Olá, " + nome);

setTimeout(saudacao, 2000, "Gabriel"); // A função `setTimeout` é usada para agendar a execução da função `saudacao` após um atraso de 2000 milissegundos (2 segundos). O terceiro argumento 'Gabriel' é passado como parâmetro para a função `saudacao` quando ela for executada. Após 2 segundos, a mensagem "Olá, Gabriel" será impressa no console.

let contador = 0;
const id = setInterval(() => {// A função `setInterval` é usada para executar uma função repetidamente em um intervalo de tempo especificado.
  contador++;
  console.log("Tempo decorrido: " + contador);
  if (contador == 10){  
    clearInterval(id); // A função `clearInterval` é usada para parar a execução repetida iniciada por `setInterval`.
  }
}, 1000);