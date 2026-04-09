const frutas = ["maçã", "banana", "laranja"];

const maisFrutas = ['uva','abacaxi'];

const clone = [...frutas]

frutas.push('melancia');

console.log(clone);
console.log(frutas);

const todasFrutas = [...frutas, ...maisFrutas]

console.log(todasFrutas);

const [primeiraFruta, segundaFruta, ...outrasFrutas] = todasFrutas;