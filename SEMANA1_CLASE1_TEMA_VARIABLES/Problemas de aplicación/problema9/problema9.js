/*
9. Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre
esa cantidad.
*/

let cantidad = parseFloat(prompt("Ingrese una cantidad"));
while(isNaN(cantidad)){
    cantidad = parseFloat(prompt("Ingrese una cantidad valida"));
}

let porcentaje = parseFloat(prompt("Ingrese el porcentaje que desea calcular"));
while(isNaN(porcentaje)){
    porcentaje = parseFloat(prompt("Ingrese un valor valido"));
}

let porcentajeCalculado = cantidad * (porcentaje / 100);
alert("El "+porcentaje+"% de "+cantidad+" es "+porcentajeCalculado.toFixed(2));

