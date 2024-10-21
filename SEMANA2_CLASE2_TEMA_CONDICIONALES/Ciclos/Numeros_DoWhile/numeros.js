/*
Un programa que solicite al usuario ingresar un número entre 1 y 10. El programa debe seguir
solicitando el número hasta que el usuario ingrese un valor válido en ese rango.
USE UN CICLO DO-WHILE  
*/

let numero;

do{
    numero = parseInt(prompt("Ingrese un numero entre 0 y 10"));
}while(numero < 1 || numero > 10);

console.log("Ingresaste un numero valido: "+numero);