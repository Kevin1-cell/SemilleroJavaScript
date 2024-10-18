/*
7. Cree un programa que tome el precio de un producto e imprima su precio final al consumidor
con un IVA de 19%.
*/

let producto = prompt("Ingrese el producto que desea comprar");
let precio = parseFloat(prompt("Ingrese el precio del producto"));
while(isNaN(precio)){
    precio = parseFloat(prompt("Por favor, ingrese el precio del producto numerico"));
}

let impuesto = precio * 0.19;
let total = precio + impuesto;

alert("El producto elegido, "+producto+" con un IVA del 19% valdría: "+total.toFixed(3));
