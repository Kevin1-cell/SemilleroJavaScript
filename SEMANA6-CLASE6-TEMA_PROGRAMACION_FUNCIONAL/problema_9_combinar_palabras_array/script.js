/**
 * Usa reduce para combinar las palabras de un array en una sola oración.
 */

let cadena = [
  "M",
  "a",
  "r",
  "i",
  "p",
  "o",
  "s",
  "a",
  " ",
  "d",
  "e",
  " ",
  "c",
  "o",
  "l",
  "o",
  "r",
  "e",
  "s",
  " ",
  "b",
  "r",
  "i",
  "l",
  "l",
  "a",
  "n",
  "t",
  "e",
  "s",
];

const concatenarArreglo = (arreglo) => {
  return arreglo.reduce((word, current) => word + current);
};

function imprimirResultado(arreglo, callback) {
  console.log(callback(arreglo));
}

imprimirResultado(cadena, concatenarArreglo);
