/*
6. Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.
*/

//Datos de entrada
let numero = parseInt(prompt("Ingrese un numero: "));
while(isNaN(numero)){
    numero = parseInt(prompt("Por favor, ingrese un numero valido: "));
}

if(numero % 5 === 0){
    alert("Este numero es divisible por 5");
}else{
    alert("Este numero no es divisible por 5");
}
