/*
10. Escriba una función la cual reciba una cadena como parámetro y ésta retorne la
misma cadena pero sin sus vocales.
*/

//Datos de entrada
let cadena = prompt("Ingrese cualquier palabra");

function cadenaSinVocales(cadena) {
  let cadenaNueva = "";
  for (let i = 0; i < cadena.length; i++) {
    if (
      cadena.charAt(i) != "a" &&
      cadena.charAt(i) != "e" &&
      cadena.charAt(i) != "i" &&
      cadena.charAt(i) != "o" &&
      cadena.charAt(i) != "u"
    ) {
      cadenaNueva += cadena.charAt(i);
    }
  }
  return cadenaNueva;
}

alert("La nueva palabra es: " + cadenaSinVocales(cadena));
