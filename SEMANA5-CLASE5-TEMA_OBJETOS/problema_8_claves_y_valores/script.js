/*
8. Dado el objeto {

162544: {nombres: "Pepe", apellidos: "Perez", edad: 40},
4357262: {nombres: "Maria", apellidos: "Gomez", edad: 31},
786353: {nombres: "Raul", apellidos: "Castro", edad: 80}
}

Use dos ciclos for-in para recorrer los objetos más internos y mostrar
sus llaves y valores. Por ejemplo:
nombres Pepe
apellidos Perez
edad 40
---------
nombres Maria
apellidos Gomez
edad 3
---------
nombres Raul
apellido s Castro
edad 80
*/

const objecto = {
  162544: { nombres: "Pepe", apellidos: "Perez", edad: 40 },
  4357262: { nombres: "Maria", apellidos: "Gomez", edad: 31 },
  786353: { nombres: "Raul", apellidos: "Castro", edad: 80 },
};

for (const claveId in objecto) {
  const persona = objecto[claveId];
  for (const clave in persona) {
    console.log(clave);
    console.log(persona[clave]);
  }
  console.log("-------------------");
}
