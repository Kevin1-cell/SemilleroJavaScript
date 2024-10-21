/*
Un programa que muestre el sistema de un usuario y que muestre si tiene derecho o no. El usuario
tiene derecho si el sisbén es menor que tres
*/


let numero = parseInt(prompt("Ingrese su numero de sisbén"));

switch(numero){
    case 1:
        console.log("No tiene derecho");
        break;
    case 2:
        console.log("No tiene derecho");
        break;
    case 3:
        console.log("Tiene derecho, SIuuuuu");
        break;
    default:
        console.log("Ingrese alguna opción valida");
        break;
}

       
       
    