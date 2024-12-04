/*
10. Cree un programa que almacene los documentos y nombres de diez usuarios, donde a
cada documento corresponda su respectivo nombre. Imprima todos los nombres de los
usuarios usando ciclos.
*/

const db = {
  1234567: "Carlos García",
  2345678: "Lucía Martínez",
  3456789: "Alberto Sánchez",
  4567890: "Elena Díaz",
  5678901: "Pedro Gómez",
  6789012: "María Rodríguez",
  7890123: "Jorge Fernández",
  8901234: "Beatriz López",
  9012345: "Andrés Pérez",
  "0123456": "Paula Herrera",
};

for (let documento in db) {
  console.log(db[documento]);
}
