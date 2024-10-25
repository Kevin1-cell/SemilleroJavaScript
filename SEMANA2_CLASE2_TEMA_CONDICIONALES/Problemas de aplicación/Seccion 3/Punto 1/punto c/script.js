/*
C. 
La cadena tiene una longitud múltiplo de 10 y la distribución de las bases debe respetar que: 

La cantidad de Citosina (C) es cuatro veces la cantidad de Guanina

Timina (T) es dos veces la cantidad de Guanina 

Adenina (A) es tres veces la cantidad de Guanina. 

La cadena debe tener cuatro bases.

El programa debe garantizar que el usuario ingrese una longitud múltiplo de 10. Si esta condición no se
cumple, el programa debe informar y solicitar nuevamente los datos.
*/

let longitud = parseInt(prompt("Ingrese una cadena multiplo de 10"));
while (isNaN(longitud) || longitud % 10 !== 0) {
  longitud = parseInt(prompt("Ingrese de nuevo una cadena multiplo de 10"));
}

function generarCadenaAdn(longitud) {
  const cantidadG = longitud / 10;
  const cantidadA = cantidadG * 3;
  const cantidadC = cantidadG * 4;
  const cantidadT = cantidadG * 2;

  let cadenaAgregada = "";
  for (let i = 0; i < cantidadA; i++) cadenaAgregada += "A";
  for (let i = 0; i < cantidadC; i++) cadenaAgregada += "C";
  for (let i = 0; i < cantidadG; i++) cadenaAgregada += "G";
  for (let i = 0; i < cantidadT; i++) cadenaAgregada += "T";
}
//NECESITO PEDIR ASESORÍA PORQUE NO LO ENTIENDO
alert("La cadena generada es: " + generarCadenaAdn(longitud));
