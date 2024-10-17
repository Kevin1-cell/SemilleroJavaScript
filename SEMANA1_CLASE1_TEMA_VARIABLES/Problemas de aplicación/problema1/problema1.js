/*
1. Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.
*/

let edadActual = parseInt(prompt("ingrese su edad actual"));
while(isNaN(edadActual)){
    edadActual = parseInt(prompt("Por favor, ingrese un número valido para su edad actual"));
}

let annosAgregados = parseInt(prompt("Ingrese los años que desea agregar"));
while(isNaN(annosAgregados)){
    annosAgregados = parseInt(prompt("Por favor, Ingrese un numero valido para los años que desea agregar"));
}
let edadNueva = edadActual + annosAgregados;
alert("Usted en " + annosAgregados +" años, tendrá " + edadNueva);

//IMPLEMENTACIÓN DE ALERTAS PARA EVITAR MOSTRAR EN PANTALLA JUNTO CON VALIDACIÓN DE NUMEROS