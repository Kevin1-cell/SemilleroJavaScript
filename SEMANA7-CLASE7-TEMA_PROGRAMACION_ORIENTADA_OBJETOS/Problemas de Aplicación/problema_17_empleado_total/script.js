/**
 * Crear una clase base Empleado con un atributo estático totalEmpleados que
se incremente cada vez que se cree un Empleado o un Gerente.
 */

class Empleado {
  static totalEmpleados = 0;
  constructor(nombre, profesion) {
    this.nombre = nombre;
    this.profesion = profesion;
    Empleado.totalEmpleados++;
    this.mostrarInfo();
  }

  mostrarInfo() {
    console.log(
      `EMPLEADO: Nombre: ${this.nombre} | profesion: ${this.profesion}`
    );
  }
}

class Gerente extends Empleado {
  constructor(nombre, profesion, cargo) {
    super(nombre, profesion);
    this.cargo = cargo;
  }

  mostrarInfo() {
    console.log(
      `GERENTE: Nombre:${this.nombre} | profesion: ${this.profesion} | Cargo: ${this.cargo}`
    );
  }
}

const empleado1 = new Empleado("Sahoory", "Marketing");
const empleado2 = new Empleado("Maryluz", "Ingeneria de Software");
const gerente = new Gerente(
  "Martha Cecilia Prada",
  "Administrador de empresas",
  "Gerente general"
);

console.log(
  `\nSe crearon ${Empleado.totalEmpleados} empleados en total (entre empleados y gerentes)`
);
