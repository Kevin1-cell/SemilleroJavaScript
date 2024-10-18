/*
4. Cree un programa que tome la base y la altura de un triángulo e imprima su área.
*/

let base = parseFloat(prompt("Ingrese la base del triángulo"));
while(isNaN(base)){
    base = parseInt(prompt("Por favor, ingrese una base del triangulo valida"));
}

let altura = parseFloat(prompt("Ingrese la altura del triángulo"));
while(isNaN(altura)){
    altura = parseFloat(prompt("Por favor, ingrese una altura del triángulo valida"));
}

let area = (base * altura) / 2;

alert("El area del triangulo es de: "+area.toFixed(2));


