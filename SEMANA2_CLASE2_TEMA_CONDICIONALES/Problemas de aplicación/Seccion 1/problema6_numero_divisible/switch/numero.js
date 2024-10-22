/*
6. Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.
*/

//Datos de entrada
let numero = parseInt(prompt("Ingrese un numero: "));
while(isNaN(numero)){
    numero = parseInt(prompt("Por favor, ingrese un numero valido: "));
}

switch(numero % 2 === 0){
    case true:
        alert("Este numero es divisible por 5");
        break;
    default:
        alert("Este numero no es divisible por 5");
}   