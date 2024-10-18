/*
16. Cree un programa que dados a, b y c, use la fórmula general para resolver la ecuación
cuadrática correspondiente.
*/

let a = parseFloat(prompt("Ingrese el valor de a"));
while(isNaN(a)){
    a = parseFloat(prompt("Ingrese un valor de a valido"));
}

let b = parseFloat(prompt("Ingrese el valor de b"));
while(isNaN(b)){
    b = parseFloat(prompt("Ingrese un valor de b valido"));
}

let c = parseFloat(prompt("Ingrese el valor de c"));
while(isNaN(c)){
    c = parseFloat(prompt("Ingrese un valor de c valido"));
}

let x1 = (- b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
let x2 = (- b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

alert("Los valores para x1 y x2 son \nx1 = "+x1.toFixed(1)+"\nx2 = "+x2.toFixed(1))