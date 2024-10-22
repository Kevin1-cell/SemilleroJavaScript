/*
Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los 
ángulos corresponden a un triángulo o no. Realice una versión con condicionales y otra 
con estructura switch-case.
*/

//Datos de entrada
let angulo1 = parseInt(prompt("Ingrese el angulo interno 1"));
let angulo2 = parseInt(prompt("Ingrese el angulo interno 2"));
let angulo3 = parseInt(prompt("Ingrese el angulo interno 3"));

let anguloTotal = angulo1 + angulo2 + angulo3;


switch (true) {
    case (angulo1 < 0 || angulo2 < 0 || angulo3 < 0):
        alert("El ángulo no debe ser negativo");
        break;
    case (anguloTotal === 180):
        alert("Los ángulos corresponden a un triángulo ya que suman " + anguloTotal);
        break;
    default:
        alert("Los ángulos no corresponden a un triángulo ya que suman " + anguloTotal);
}