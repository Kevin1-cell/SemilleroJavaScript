/*
5. Cree un programa que tome el radio de un círculo e imprima su área y perímetro.
*/

let radio = parseFloat(prompt("Ingrese el radio del circulo"));
while(isNaN(radio)){
    radio = parseFloat(prompt("Por favor, ingrese un radio del circulo valido"));
}

let area = Math.PI * (Math.pow(radio, 2));
let perimetro = 2 * Math.PI * radio;

alert("Los valores según el radio ingresado son: \nAREA: "+area.toFixed(2)+"\nPERIMETRO: "+perimetro.toFixed(2));