/*
4. Dado el objeto {dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50} recorrer el objeto y
mostrar cuáles de los valores son pares.
*/

const numeros = { dos: 2, cinco: 5, siete: 7, cuarenta: 40, cincuenta: 50 };

for (const clave in numeros) {
  if (numeros[clave] % 2 == 0) {
    console.log(numeros[clave]);
  }
}