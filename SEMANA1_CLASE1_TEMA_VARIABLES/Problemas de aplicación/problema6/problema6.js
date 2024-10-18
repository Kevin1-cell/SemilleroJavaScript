/*
6. Cree un programa que tome el lado de un cubo e imprima su volumen.
*/

let lado = parseFloat(prompt("Ingrese el lado del cubo"));
while(isNaN(lado)){
    lado = parseFloat(prompt("Por favor, ingrese un lado del cubo valido"));
}

let volumen = Math.pow(lado, 3);
alert("El volumen del cubo es: "+volumen.toFixed(2));