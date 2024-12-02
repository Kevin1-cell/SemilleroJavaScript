/*
8. Escriba una función llamada obtenerPrimeraLetra() que reciba un nombre y devuelva
la primera letra del nombre.
*/

//Datos de entrada

let cadena = prompt("Ingrese cualquier palabra en minuscula");

function obtenerPrimeraLetra(cadena){
    return cadena.charAt(0).toUpperCase();
}

alert(obtenerPrimeraLetra(cadena));