let dimensionCantidad: number = Number(
  prompt("Ingrese cuantos chicos hay en el equipo de fútbol")
);
let cantidadChicos: number[] = new Array(dimensionCantidad);
let edadesChicos: number[] = new Array(dimensionCantidad);
let promedio: number = 0;

function aleatorio(menorValor: number, mayorValor: number): void {
  let resultado: number = 0;
  menorValor = 3;
  mayorValor = 7;
  for (let indice: number = 0; indice < cantidadChicos.length; indice++) {
    resultado = Math.random() * (mayorValor - menorValor) + menorValor;
    console.log(`Edad del alumno ${edadesChicos[indice] + 1} es ${resultado.toFixed()}`);
  }
}

aleatorio(3, 7)

//promedio = aleatorio(3, 7) / 5;
//console.log(`El promedio de edades de los chicos de fútbol es ${promedio}`);