/*
1. Escribe una función sumar que reciba dos números y un callback. El callback debe
ser ejecutado con el resultado de la suma.
*/

function sumar(a, b, callback) {
  const resultado = a + b;
  callback(resultado);
}

sumar(5, 3, function (resultado) {
  console.log("El resultado de la suma es:", resultado);
});
