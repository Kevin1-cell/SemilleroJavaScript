/*
16. Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán
formadas por las letras A o C o T o G referirse a taller de ADN pasado) y muestre la
cadena de ADN con mayor número de Timina (T).
*/

function cadenaConMasTimina(arr) {
  return arr.reduce((max, actual) =>
    actual.split("T").length - 1 > max.split("T").length - 1 ? actual : max
  );
}

let cadenasADN = ["ACTG", "TGTGT", "ACGT", "TCTTTT"];
console.log(cadenaConMasTimina(cadenasADN));
