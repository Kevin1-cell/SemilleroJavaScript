/*
7. Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.
*/

//Datos de entrada
let numero = parseInt(prompt("Ingrese un numero: "));
while(isNaN(numero) || numero < 1 || numero > 15){
    numero = parseInt(prompt("Por favor, ingrese un numero valido: "));
}

let conteoDivision = 0;
for (let i = 1; i <= numero; i++){
    if(numero % i === 0){
        conteoDivision++;
    }
}
if(conteoDivision > 2){
    alert("No es un numero primo");
    console.log(conteoDivision);
}else{
    alert("Es un numero primo");
    console.log(conteoDivision);
    
}
