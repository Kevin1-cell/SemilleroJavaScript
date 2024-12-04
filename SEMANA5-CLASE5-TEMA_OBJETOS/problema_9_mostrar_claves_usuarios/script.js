/*
9. Cree un programa que pida al usuario el nombre de un producto existente en una tienda,
luego, que le muestre el precio del producto. El usuario debe poder elegir de entre por lo
menos cinco productos.
*/

const productos = {
  manzana: 2500,
  leche: 3000,
  pan: 1500,
  huevos: 4000,
  arroz: 2000,
};

let producto = prompt(
  "¿Qué producto deseas consultar? (manzana/leche/pan/huevos/arroz)"
);

if (productos[producto]) {
  alert(`El precio de ${producto} es $${productos[producto]}`);
} else {
  alert("Producto inexistente");
}
