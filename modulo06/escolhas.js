const nota = 9
// switch é uma estrutura de controle que avalia uma expressão e executa um bloco de código correspondente ao valor da expressão. Ele é útil quando temos várias condições para verificar, como no caso de notas escolares.
switch(nota) {
    case 10:
    case 9:
        console.log('Excelente')
        break
    case 8:
    case 7:
        console.log('Bom')
        break
    case 6:
    case 5:
    case 4:
        console.log('Regular')
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('Insuficiente')
        break
    default:
        console.log('Nota inválida')
}


//Nesse exemplo, o estado é avaliado e, dependendo do valor, uma mensagem correspondente é exibida. O `default` é usado para lidar com casos em que o valor do estado não corresponde a nenhum dos casos especificados.
const estado = 'SP'
switch(estado) {
    case 'SP':
        console.log('São Paulo')
        break
    case 'RJ':
        console.log('Rio de Janeiro')
        break
    case 'MG':
        console.log('Minas Gerais')
        break
    case 'ES':
        console.log('Espírito Santo')
        break
    default:
        console.log('Estado fora da região Sudeste')
}