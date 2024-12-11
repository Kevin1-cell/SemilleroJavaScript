/*
4. Construir un programa que reciba tres números de un dígito y los combine mostrando todos los posibles
números pares que se pueden construir con estos tres.
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
