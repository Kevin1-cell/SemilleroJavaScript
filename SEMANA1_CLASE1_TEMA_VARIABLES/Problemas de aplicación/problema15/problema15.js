/*
15. Cree un programa que calcule horas y minutos a partir de segundos.
*/

let segundos = parseInt(prompt("Ingrese los segundos"));
while(isNaN(segundos) || segundos < 0){
    segundos = parseInt(prompt("Ingrese segundos validos"));
}

let horas = Math.floor(segundos/3600);
let minutos = Math.floor((segundos % 3600) / 60);

alert("Los segundos equivalen a "+horas+" horas y "+minutos+" minutos")