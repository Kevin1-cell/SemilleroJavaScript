/*
2.Dada la cadena “Somos VankVersity”:
c) Recorra la cadena usando ciclo for y muestre si la cadena contiene la letra “V”
d) Recorra la cadena usando ciclo for y muestre cuántas veces está la letra “o” . Como sugerencia use una
variable contadora para contar el número de veces que se encuentra la letra “o”.
*/

alert("“Somos VankVersity”");
alert("Punto c");
let palabra = "Somos VankVersity";
let esta = false;
for(let index = 0; index < palabra.length; index++){
    if (palabra[index] == "V") {
        esta = true;
    }
}
if (esta) {
    alert("La letra V si está")
}else{
    alert("No está")
}

console.log("Punto D");

let contador = 0;
for(let index = 0; index < palabra.length; index++){
    if(palabra[index] == "o"){
        contador++;
    }
}
console.log("La cantidad de veces que aparece la letra 'o' es ",contador);
