/*
5. Cree un programa que lea un número y muestre si este es par o impar. Realice una versión con condicionales
y otra con estructura switch-case.
*/

//Datos de entrada
let numero = parseInt(prompt("Ingrese un numero: "));
while(isNaN(numero)){
    numero = parseInt(prompt("Por favor, ingrese un numero valido: "));
}

if(numero % 2 === 0){
    alert("Es un numero par");
}else{
    alert("No es un numero par");
}
