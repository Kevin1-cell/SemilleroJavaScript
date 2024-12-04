/*
1. Cree un objeto donde se almacenen los productos de un supermercado con su respectivo
precio. Los productos son:
*/

const inventario = {
  papa: {
    nombre: "papa",
    precio: 20,
  },
  arroz: {
    nombre: "arroz",
    precio: 20,
  },
  lentejas: {
    nombre: "lentejas",
    precio: 20,
  },
  aceite: {
    nombre: "aceite",
    precio: 20,
  },
};

console.log(
  `Precio de la ${inventario.papa.nombre} es:${inventario.papa.precio}`
);

console.log(
  `Precio de la ${inventario.arroz.nombre} es:${inventario.arroz.precio}`
);

console.log(
  `Precio de la ${inventario.lentejas.nombre} es:${inventario.lentejas.precio}`
);

console.log(`Precio de la ${inventario.p.nombre} es:${inventario.papa.precio}`);
