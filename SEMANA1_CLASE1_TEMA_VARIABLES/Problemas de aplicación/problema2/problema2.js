/*
2. Cree un programa que lea dos números y muestre su producto, su módulo, su cociente, su
suma y su resta.
*/

let numero1 = parseInt(prompt("Ingrese un numero entero"));
while(isNaN(numero1)){
    numero1 = parseInt(prompt("Por favor, ingrese un numero entero valido"));
}
let numero2 = parseInt(prompt("Ingrese otro un numero entero"));
while(isNaN(numero2)){
    numero2 = parseInt(prompt("Por favor, ingrese un numero entero valido"));
};

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let producto = numero1 * numero2;
let modulo = numero1 % numero2;
let cociente = numero1 / numero2;
alert("Los resultado de "+numero1+" y "+numero2+" es: \nSuma: "+suma+"\nResta: "+resta+
    "\nProducto: "+producto+"\nModulo: "+modulo+"\nCociente: "+cociente
);

