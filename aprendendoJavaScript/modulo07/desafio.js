// contar quantos numeros pares e numeros impares existem entre 0 e 100 

let totalNumerosPares = 0
let totalNumerosImpares = 0

for (let i = 0; i<=100; i++){
    if (i % 2 == 0) {
        totalNumerosPares++
    } else {
        totalNumerosImpares++
    }
}

console.log('Total números pares: '+totalNumerosPares)
console.log('Total números impares: '+totalNumerosImpares)