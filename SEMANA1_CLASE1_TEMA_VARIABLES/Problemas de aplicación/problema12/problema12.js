/*
12. Cree un programa que realice la conversión de grados Celsius a Fahrenheit
*/

let gradosCelcius = parseInt(prompt("Ingrese los grados celcius"));
while(isNaN(gradosCelcius)){
    gradosCelcius = parseInt(prompt("Ingrese un valor valido, numerico"));
}

let gradosFahrenheit = (gradosCelcius * 9/5) + 32;

alert(gradosCelcius+"° celcius equivalen a "+gradosFahrenheit+"° fahrenheit");