/*
d. La cadena tiene únicamente dos de las cuatro bases (seleccionadas aleatoriamente), pero indicando el
porcentaje de la primera base seleccionada, de tal forma que el porcentaje de la segunda, sea el complemento
para completar la longitud indicada. El programa debe impedir que el porcentaje ingresado sea menor a 0% y
mayor al 99%. Para garantizar por lo menos un 1% para la segunda base. Si esta condición no se cumple, el
programa debe informar y solicitar nuevamente los datos.
*/

let porcentaje = parseInt(prompt("Ingrese el porcentaje para la base 1"));
while (isNaN(porcentaje) || porcentaje < 1 || porcentaje > 99) {
  porcentaje = parseInt(
    prompt("Por favor, ingrese el porcentaje para la base 1")
  );
}

const porcentaje1 = porcentaje / 10;
const porcentaje2 = 10 - porcentaje1;

console.log("Porcentaje 1: ", porcentaje1, "Porcentaje 2: ", porcentaje2);
const basesAdn = ["A", "C", "T", "G"];
const base1 = basesAdn[Math.floor(Math.random() * 4)];
console.log("Base 1 ", base1);

let base2;
do {
  base2 = basesAdn[Math.floor(Math.random() * 4)];
} while (base1 === base2);
console.log("Base 1 ", base2);

let cadena = "";
for (let i = 0; i < porcentaje1; i++) {
  cadena += base1;
}
for (let j = 0; j < porcentaje2; j++) {
  cadena += base2;
}

console.log(cadena);

let cadenaMezclada = "";
while (cadena.length > 0) {
  const indiceAleatorio = Math.floor(Math.random() * cadena.length);
  cadenaMezclada += cadena[indiceAleatorio];
  cadena = cadena.slice(0, indiceAleatorio) + cadena.slice(indiceAleatorio + 1);
}

console.log("La cadena generada es: " + cadenaMezclada);
