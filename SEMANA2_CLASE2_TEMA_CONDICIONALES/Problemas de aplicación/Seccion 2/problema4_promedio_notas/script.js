/*
4. Cree un programa que calcule el promedio de tres notas para n estudiantes. Use ciclo for. Use
funciones.
*/

//CREO UNA FUNCION PARA VALIDAR
function notaValida(mensaje) {
  let nota;
  do {
    nota = parseFloat(prompt(mensaje));
    if (isNaN(nota)) {
      nota = parseFloat(prompt("Por favor, ingrese una nota valida"));
    }
  } while (isNaN(nota));
  return nota;
}

function calcularPromedio(notaUno, notaDos, notaTres) {
  let promedio = 0;
  promedio = (notaUno + notaDos + notaTres) / 3;
  return promedio.toFixed(1);
}

//Saber la cantidad de estudiantes que van a a hacer el proceso.
let numeroEstudiantes = parseInt(
  prompt("Ingrese la cantidad de estudiantes que desean conocen la nota")
);
for (let i = 0; i < numeroEstudiantes; i++) {
  alert("Estudiante numero " + (i + 1));
  let notaUno = notaValida("Ingrese la nota uno");
  let notaDos = notaValida("Ingrese la nota dos");
  let notaTres = notaValida("Ingrese la nota tres");
  console.log(
    "La nota del estudiante " +
      (i + 1) +
      " es: " +
      calcularPromedio(notaUno, notaDos, notaTres)
  );
}
