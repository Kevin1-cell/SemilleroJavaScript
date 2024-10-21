/*
1.Dada la cadena “Javascript es un buen lenguaje”:
a) Leer e imprimir los elementos de índices 3, 6, 8
b) Recorra la cadena usando ciclo for
*/

alert("“Javascript es un buen lenguaje”");
alert("Punto a");
let palabra = "Javascript es un buen lenguaje";

console.log("Posición 3: "+palabra[3]);
console.log("Posición 6: "+palabra[6]);
console.log("Posición 8: "+palabra[8]);


alert("Punto b");

for(let i = 0; i < palabra.length; i++){
    console.log(palabra[i]);
}
