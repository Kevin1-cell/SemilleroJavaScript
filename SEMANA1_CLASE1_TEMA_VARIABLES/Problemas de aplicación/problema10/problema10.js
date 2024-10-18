/*
10. Cree un programa que tome un número real e imprima su valor absoluto.
*/

let numero = parseFloat(prompt("Ingrese un numero ER"));
while(isNaN(numero)){
    numero = parseFloat(prompt("Ingrese un numero ER valido"));
}

let valorAbsoluto = Math.abs(numero);
alert("El valor absoluto de "+numero+" es "+valorAbsoluto.toFixed(2));