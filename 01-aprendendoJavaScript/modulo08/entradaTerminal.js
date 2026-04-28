// Entrada de dados no terminal usando o módulo readline do Node.js. O módulo readline permite criar uma interface de leitura e escrita no terminal, facilitando a interação com o usuário.

const readline = require('readline')

const leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
 // A função `createInterface` é usada para criar uma nova interface de leitura e escrita. Ela recebe um objeto de configuração que especifica as opções para a interface. No exemplo acima, as opções incluem `input`, que é definido como `process.stdin` (entrada padrão do terminal), e `output`, que é definido como `process.stdout` (saída padrão do terminal). Isso permite que a interface leia a entrada do usuário e escreva a saída no terminal.



leitor.question('Qual é o seu nome?', (nome) => {
  console.log('Olá'+nome)
  console.log('Seja bem vindo')

  leitor.question('Qual a sua idade? ', (idade)=>{
    console.log('Sua idade é: '+idade)
  })

  leitor.close()
})
// A função `question` é usada para fazer uma pergunta ao usuário. Ela recebe dois argumentos: a pergunta a ser feita (uma string) e uma função de callback que será executada quando o usuário fornecer uma resposta. No exemplo acima, a pergunta é "Qual é o seu nome?" e a função de callback recebe a resposta do usuário como argumento `nome`. Dentro da função de callback, você pode usar a resposta do usuário para realizar ações adicionais, como imprimir uma mensagem de saudação ou solicitar mais informações.