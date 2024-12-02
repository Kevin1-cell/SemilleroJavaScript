/*
9. Escriba una función la cual reciba una cadena como parámetro y retorne la cantidad
de vocales que contiene la cadena.
*/

//Datos de entrada
let cadena = prompt("Ingrese cualquier palabra");

function cantidadVocales(cadena) {
  let contador = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (
      cadena.charAt(i) === "a" ||
      cadena.charAt(i) === "e" ||
      cadena.charAt(i) === "i" ||
      cadena.charAt(i) === "o" ||
      cadena.charAt(i) === "u"
    ) {
      contador++;
    }
  }
  return contador;
}

alert("El numero de vocales son: " + cantidadVocales(cadena));
