/*
3.Dada la cadena “Javascript es genial” recorra la cadena usando ciclo for y muestre por cuantas palabras está
compuesta la cadena. Como sugerencia se puede basar en el modelo del ejercicio 2 literal d.
*/
let palabra = "Kevin";

let contadorEspacios = 0;

for(let i = 0; i < palabra.length; i++){
    if(palabra[i] === " "){
        contadorEspacios++;
    }
}
let contadorPalabras = contadorEspacios+1;
alert("La cantidad de palabras son: "+contadorPalabras);