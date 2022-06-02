let dimensionCantidad: number = Number(
  prompt("Ingrese cuantos chicos hay en el equipo de fútbol")
);
let cantidadChicos: number[] = new Array(dimensionCantidad);
let min: number = 3;
let max: number = 7;

function aleatorio(menorValor: number, mayorValor: number): number {
  return Math.floor(Math.random() * (mayorValor + 1 - menorValor) + menorValor);
}

function calcularPromedio(vector: number[]): number {
  let resultado: number = 0;
  let promedio: number = 0;
  for (let i: number = 0; i < vector.length; i++) {
    resultado += vector[i];
  }
  promedio = resultado / vector.length;
  return promedio;
}

for (let i: number = 0; i < cantidadChicos.length; i++) {
  cantidadChicos[i] = aleatorio(min, max);
}

console.log(`Las edades de los chicos son: ${cantidadChicos}`);
console.log(
  `El promedio de edad de los chicos es: ${calcularPromedio(cantidadChicos)}`
);
