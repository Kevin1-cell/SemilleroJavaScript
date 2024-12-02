/*
3. Escriba una función que tenga como parámetro un nombre y retorne la cadena “Hola
Juan”, por ejemplo si el nombre pasado es Juan.
*/
  
function saludo(nombre) {
  let caden = "Hola! Qué más ";

  return caden + nombre;
}

let nombre = prompt("Ingrese un nombre ");

alert(saludo(nombre));
