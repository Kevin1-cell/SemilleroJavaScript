/*
Escriba una función la cual reciba como parámetro 2 números enteros y 1 cadena,
La idea es que los números recibidos se puedan operar según la operación que
hallamos recibido en la cadena, ejemplo miFuncion(2, 5, ”suma”).
*/

let numeroUno = parseInt(prompt("Ingrese un numero"));
let numeroDos = parseInt(prompt("Ingrese un numero"));

let cadena = prompt("Ingrese la operación que desea realizar");

let operacion = cadena.toLocaleLowerCase();
switch (operacion) {
  case "suma":
    let suma = numeroDos + numeroUno;
    console.log("La suma es ", suma);
    break;
  case "resta":
    let resta = numeroUno - numeroDos;
    console.log("La resta es ", resta);
    break;
  case "multiplicacion":
    let multiplicacion = numeroDos * numeroUno;
    console.log("La multiplicacion es ", multiplicacion);
    break;
  case "division":
    let division = numeroDos / numeroUno;
    console.log("La division es ", division);
    break;
  default:
    alert("Ingrese una operacion valida");
}
