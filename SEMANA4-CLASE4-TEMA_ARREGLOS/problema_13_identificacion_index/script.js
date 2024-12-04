/*
13. Cree una función que reciba un arreglo de nombres de personas y muestre si la letra
“c” se encuentra entre tales nombres, en caso de que la letra “c” se encuentre,
mostrar las veces que se encuentra(considerando las apariciones entre todos los
nombres) . Se le debe pedir al usuario que introduzca el arreglo.
*/

function contarLetraC(nombres) {
  let conteo = 0;
  nombres.forEach((nombre) => {
    conteo += nombre.toLowerCase().split("c").length - 1;
  });
  if (conteo > 0)
    console.log(`La letra "c" se encuentra ${conteo} veces en los nombres.`);
  else console.log('La letra "c" no se encuentra en los nombres.');
}

let nombres = prompt("Introduce nombres separados por comas:").split(",");
contarLetraC(nombres);
