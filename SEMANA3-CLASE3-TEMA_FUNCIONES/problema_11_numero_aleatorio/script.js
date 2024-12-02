/*
11. Escriba una función que al llamarla retorne un número entero aleatorio entre 1 y 20.
*/

//Funcion

let numeroAleatorio = () => Math.floor(Math.random() * 20) + 1;

//Datos de entrada

const continuar = true;

do {
  let pregunta = prompt("Desea llamar la función? (SI/NO)").toLowerCase();
  if (pregunta === "si") {
    alert("Aquí tienes tu numero " + numeroAleatorio());
  } else if (pregunta === "no") {
    continuar = false;
  } else {
    pregunta = prompt("Ingrese ya sea Si o No");
  }
} while (continuar);
