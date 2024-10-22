/*
11. Cree un programa que muestre el promedio de n números, dejándose de solicitar números
cuando se introduzca el cero.
*/

let n;
let suma = 0;
let contadorNumeros = 0;
while(true){
  n = parseInt(prompt("Ingrese un numero: "));
  if(n !== 0){
    suma += n;
    contadorNumeros++;
  }else{
    console.log("Programa finalizado, el promedio de los números es de ",calcularPromedio(suma, contadorNumeros));
    break;
  }
}

function calcularPromedio(suma, contadorNumeros){
  let promedio = suma / contadorNumeros;
  return promedio;
}
