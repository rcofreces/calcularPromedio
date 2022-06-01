let dimensionCantidad: number = Number(prompt("Ingrese cuantos chicos hay en el equipo de fútbol"));
let cantidadChicos: number[] = new Array (dimensionCantidad);
let edadChicos: number[] = [3, 4, 5, 6, 7];
  
function aleatorio(menorValor: number, mayorValor: number, indice: number) {
  let resultado: number;
  for (indice = 0; indice < cantidadChicos.length; indice++) {
    resultado = Math.random() * (7 - 3) + 3;
    indice++;
    console.log("Edad del alumno es", resultado.toFixed());
  }
}

aleatorio(3, 7, 0);


/*function dibujarGuionesv2(cantidad: number) {
  let linea: string = "-";
  for (let x: number = 1; x <= cantidad; x++) {
    linea += "-"; // linea = linea + "-"
  }
  console.log(linea);
}

console.log("Dibuja guiones recibiendo la cantidad de lineas por parametro");
dibujarGuionesv2(Number(prompt("Ingrese la cantidad de guiones")));
dibujarGuionesv2(45);*/

