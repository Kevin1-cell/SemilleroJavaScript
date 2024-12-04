/*
7. Dado el objeto { 3: "tres", 60: "sesenta", 10: "diez" } eliminar la clave valor 60-"sesenta".
Imprima todo el objeto para verificar los cambios.
*/

const objeto = {
  3: "tres",
  60: "sesenta",
  10: "diez",
};

delete objeto[60];
console.log(objeto);
