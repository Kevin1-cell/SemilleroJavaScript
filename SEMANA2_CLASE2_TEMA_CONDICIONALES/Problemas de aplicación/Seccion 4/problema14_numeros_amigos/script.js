/*
14. Se debe informar si dos números son números amigos. “Dos números se consideran amigos si son
positivos y la suma de los divisores de uno es igual al otro. Se debe considerar que la suma de los
divisores no debe incluir al número evaluado. Un ejemplo de números amigos son el 220 y el 284:
Los divisores del 220 son: 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 y 110, y suman 284;
Los divisores del 284 son 1, 2, 4, 71 y 142, y suman 220. ”
*/

function sumaDivisores(num) {
  let suma = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      suma += i;
    }
  }
  return suma;
}

let num1 = parseInt(prompt("Ingrese el primer número positivo:"));
let num2 = parseInt(prompt("Ingrese el segundo número positivo:"));

if (num1 <= 0 || num2 <= 0) {
  alert("Ambos números deben ser positivos.");
} else {
  let sumaDivisoresNum1 = sumaDivisores(num1);
  let sumaDivisoresNum2 = sumaDivisores(num2);

  if (sumaDivisoresNum1 === num2 && sumaDivisoresNum2 === num1) {
    alert(`${num1} y ${num2} son números amigos.`);
  } else {
    alert(`${num1} y ${num2} no son números amigos.`);
  }
}
