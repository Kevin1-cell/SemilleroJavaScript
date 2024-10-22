/*
3. Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
también se debe mostrar al usuario.
*/

let numeroUno = parseInt(prompt("Ingrese el numero 1"));

let numeroDos = parseInt(prompt("Ingrese el numero 2"));

if(numeroUno > numeroDos){
    alert("El numero mayor es el numero :"+numeroUno);
}else if(numeroUno < numeroDos){
    alert("El numero mayor es el numero :"+numeroDos);
}else{
    alert("Los numeros son iguales "+numeroUno+" = "+numeroDos);
}