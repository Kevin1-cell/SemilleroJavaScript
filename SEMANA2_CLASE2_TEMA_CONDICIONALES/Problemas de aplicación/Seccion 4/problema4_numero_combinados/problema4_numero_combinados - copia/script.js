/*
Construya un programa que dados dos números enteros, encuentre su cociente mediante restas sucesivas.
*/

let numeros = prompt(
  "Ingrese tres números de un dígito separados sin espacios"
);

function generarNumerosPares(cadena) {
  let pares = [];

  for (let i = 0; i < cadena.length; i++) {
    for (let j = 0; j < cadena.length; j++) {
      for (let k = 0; k < cadena.length; k++) {
        if (i !== j && j !== k && i !== k) {
          let numero = parseInt(cadena[i] + cadena[j] + cadena[k]);
          if (numero % 2 === 0) {
            pares.push(numero);
          }
        }
      }
    }
  }

  return pares;
}

let numerosPares = generarNumerosPares(numeros);
console.log(`Los números pares generados son: ${numerosPares}`);
