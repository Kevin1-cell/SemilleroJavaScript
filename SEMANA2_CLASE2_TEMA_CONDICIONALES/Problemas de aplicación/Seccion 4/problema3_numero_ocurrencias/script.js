/*
3. Se trata de implementar un programa que devuelva la cantidad de ocurrencias del dígito que más se repite en
un número entero no negativo. Por ejemplo, para el caso de 343331 el número que más se repite es 3, por ende
se debe devolver 4, que es la cantidad de ocurrencias del 3.
*/

let numero = prompt("Ingrese una cadena de números");

function ocurrencias(num) {
  let frecuencias = {};
  let maxOcurrencias = 0;

  for (let i = 0; i < num.length; i++) {
    let digito = num.charAt(i);
    if (frecuencias[digito]) {
      frecuencias[digito]++;
    } else {
      frecuencias[digito] = 1;
    }

    if (frecuencias[digito] > maxOcurrencias) {
      maxOcurrencias = frecuencias[digito];
    }
  }
  return maxOcurrencias;
}

let resultado = ocurrencias(numero);
console.log(`El numero de ocurrencias mayor es ${resultado}`);
