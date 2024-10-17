
//1. Realice un programa que calcule el índice de masa corporal de una persona.

let peso = parseFloat(prompt("Ingrese su peso actual en kilogramos"));
let altura = parseFloat(prompt("Ingrese su estatura en centimetros"));

altura = altura / 100;
let IMC = peso / (altura*2);
console.log("Su IMC es de ",IMC.toFixed(2));