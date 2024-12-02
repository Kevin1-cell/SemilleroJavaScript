/*
5. Escriba una función que reciba un número n como parámetro y genere su factorial.
*/


//Funciones
function mostrarNumeros(numero) {
  
  for(let i = 1; i <= numero; i++){
    console.log(i);
  }
}

//Datos de entrada.
let numero = prompt("Ingrese el numero el cual desea ver ");

mostrarNumeros(numero);