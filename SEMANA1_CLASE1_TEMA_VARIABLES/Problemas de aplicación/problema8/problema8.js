/*
8. Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene
siempre un descuento del 10%.
*/

let producto = prompt("Ingrese el producto que desea comprar");
let precio = parseFloat(prompt("Ingrese el valor del producto"));
while(isNaN(precio)){
    precio = parseFloat(prompt("Ingrese un valor valido"));
}

let productoConDescuento = precio - (precio * 0.10);
alert("El producto "+producto+" con un 10% de descuento valdría "+productoConDescuento.toFixed(3));
