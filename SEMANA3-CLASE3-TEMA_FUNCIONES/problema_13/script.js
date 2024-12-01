/*
14. Escriba una función la cual permita o no la entrada a un parque de atracciones,

dicha función recibe la edad, 
estatura y 
permiso parental como parámetros. 

Para
permitir el acceso el usuario deberá de ser mayor de edad y medir más de 150 cm,
en caso de ser menor de edad debe contar con un permiso parental para que sea
concedido el acceso.
*/

function validarNumeros(numero) {
    while (isNaN(numero)) {
        numero = parseInt(prompt("Ingrese un número válido"));
    }
    return numero;
}


let edad = parseInt(prompt("Ingrese su edad"));
edad = validarNumeros(edad);

let estatura = parseInt(prompt("Ingrese su estatura en centímetros"));
estatura = validarNumeros(estatura);

function accederAlParqueTematico(edad, estatura) {
    if (edad >= 18 && estatura > 150) {
        alert("Puede acceder al parque, cumple con los parámetros.");
    } else if (edad < 18 && estatura > 150) {
        let permiso = prompt("¿Cuenta usted con un permiso parental? Ingrese 'Si' o 'No'").toLowerCase();
        
        if (permiso === "si") {
            alert("Puede acceder al parque, cumple con los parámetros.");
        } else {
            alert("Lo siento, no puedes acceder al parque, no cumples con los parámetros.");
        }
    } else {
        alert("Lo siento, no puedes acceder al parque, no cumples con los parámetros.");
    }
}


accederAlParqueTematico(edad, estatura);
