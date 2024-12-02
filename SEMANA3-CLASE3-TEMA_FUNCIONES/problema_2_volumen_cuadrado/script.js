/*
2. Escriba una función que reciba el lado de un cubo y retorne su volumen.
*/

function volumen(lado){
 return Math.pow(lado, 3);
}

let area = (lado) => Math.pow(lado, 3);

let lado = parseInt(prompt ("Ingresa la altura de "));

alert("El volumen ingresado es: "+volumen(lado)+" y "+area(lado));
