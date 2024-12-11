/*
b. La cadena tiene únicamente dos de las cuatro bases (seleccionadas aleatoriamente) y ubicadas en
cualquier posición y orden dentro de la cadena.
*/

function generarCadenaAleatoria(longitud) {
  const basesAdn = ["A", "T", "G", "C"];

  const base1 = basesAdn[Math.floor(Math.random() * 4)];

  let base2;
  do {
    base2 = basesAdn[Math.floor(Math.random() * 4)];
  } while (base1 === base2);

  let cadena = "";
  for (let i = 0; i < longitud; i++) {
    cadena += Math.random() < 0.5 ? base1 : base2;
  }
  return cadena;
}

let longitud = parseInt(prompt("Ingrese la longitud de la cadena"));
while (isNaN(longitud)) {
  longitud = parseInt(prompt("Ingrese una longitud valida cadena"));
}
let cadenaAdn = generarCadenaAleatoria(longitud);
alert("La cadena generada es: "+cadenaAdn);