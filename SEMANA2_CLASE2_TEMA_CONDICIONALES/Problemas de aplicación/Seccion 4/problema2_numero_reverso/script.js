/*
2. Se denomina número reversible a aquél que al ser sumado a sí mismo tras invertir sus dígitos da
como resultado un número en el que todos los dígitos son impares. Por ejemplo, el número 36 es reversible pues
36 + 63 = 99, y los dos dígitos de 99 son impares. También lo son el 409 y el 904. Crea un programa que reciba
un número entre 0 y 999 y retorne como salida true si el número es reversible o false si no lo es.
*/

let numero = parseInt(
  prompt("Ingrese un número entero positivo no superior a 1,000,000,000")
);

while (isNaN(numero) || numero <= 0 || numero > 999) {
  numero = parseInt(
    prompt("Por favor, ingrese un número válido (entre 2 y 999):")
  );
}

let numeroInvertido = numero.toString().split("").reverse().join("");

function esReversible(suma) {
  let digitos = suma.toString();

  for (let i = 0; i < digitos.length; i++) {
    if (parseInt(digitos.charAt(i)) % 2 === 0) {
      return true;
    }
  }
  return false;
}

let suma = numero + numeroInvertido;

if (esReversible(suma)) {
  console.log("Es reversible");
} else {
  console.log("No lo es");
}
