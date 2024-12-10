/**
 * Dado un array de nombres, conviértelos a mayúsculas y ordénalos alfabéticamente.
 */

let nombres = ["Pablo", "Mary", "Cesar", "Santiago", "Martha"];

const ordenarConvertirMayus = (arreglo) => {
  let nombresOrdenados = arreglo.map((nombre) => nombre.toUpperCase()).sort();
  return nombresOrdenados;
};

function imprimirResultado(arreglo, callback) {
  console.log(`Arreglo ordeanado:\n${callback(arreglo)}`);
}

imprimirResultado(nombres, ordenarConvertirMayus);
