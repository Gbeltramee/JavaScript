const agora = new Date()

console.log(agora)
console.log('Ano: ',agora.getFullYear())
console.log('Mes: ',agora.getMonth()+1)
console.log('Dia: ',agora.getDate())
console.log('Hora: ',agora.getHours())
console.log('Minutos: ',agora.getMinutes())


const nascimento = new Date('2006-12-21T02:00:00.000Z')

console.log(nascimento)
console.log('Data formatada(BR):',nascimento.toLocaleDateString('pt-BR'))