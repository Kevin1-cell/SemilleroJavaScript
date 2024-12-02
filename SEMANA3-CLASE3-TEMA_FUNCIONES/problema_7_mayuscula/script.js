/*
Escriba una función la cual reciba como parámetro una cadena y genere como
retorno la misma cadena pero con todos su contenido en mayúscula.
*/

//Datos de entrada

let cadena = prompt("Ingrese cualquier palabra en minuscula");


let mayuscula = (cadena) => cadena.toUpperCase();

alert(mayuscula(cadena));