/*
1. Escriba una función que tenga cómo parámetros la base y altura de un rectángulo y
retorne su área.
*/

function areaRectangulo(base, altura){
 return base * altura;
}

let area = (base, altura) => base * altura;

let base = parseInt(prompt ("Ingrese la base "));
let altura = parseInt(prompt ("Ingrese la base "));

alert("El area ingresada de las bases es: "+area(base, altura)+" y "+areaRectangulo(base, altura));
