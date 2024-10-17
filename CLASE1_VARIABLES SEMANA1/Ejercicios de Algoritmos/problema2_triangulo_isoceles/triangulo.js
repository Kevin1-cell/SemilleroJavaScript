//Realice un programa que calcule el área de un trapecio isósceles.

//para saber un triángulo es isoceles o no almenos dos de sus lados deben ser iguales

let longitudA = parseFloat(prompt("Ingrese el lado A"));
let longitudB = parseFloat(prompt("Ingrese el lado B"));
let longitudC = parseFloat(prompt("Ingrese el lado C"));

if(longitudA == longitudB || longitudB == longitudC || longitudA == longitudC){
    console.log("El triangulo es isoceles");
}else{
    console.log("Este triángulo no corresponde a uno isoceles");    
}