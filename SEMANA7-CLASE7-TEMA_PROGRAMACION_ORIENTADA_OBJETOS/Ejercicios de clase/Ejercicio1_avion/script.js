/*
Crear una clase avion que implemente dos metodos de obnjetos yu dos atributos de objetos, también, 
un atributo de clase (Estatico) y un metodo de clase (Estatico).
*/

class Avion {
  //ATRIBUTOS ESTÁTICOS

  static cantidadAviones = 0;

  constructor(modelo, capacidad) {
    this.modelo = modelo;
    this.capacidad = capacidad;
    Avion.cantidadAviones++;
  }

  despegar() {
    console.log(`El avion ${this.modelo} está despegando`);
  }

  aterrizar() {
    console.log(`EL avion ${this.modelo} está aterrizando`);
  }

  static cantidadAvionesTotal() {
    console.log(`El numero de aviones creados son ${this.cantidadAviones}`);
  }
}

const avion1 = new Avion ("24Df2", 608);
const avion2 = new Avion ("Ke1398", 204);

avion1.despegar();
avion2.aterrizar();
Avion.cantidadAvionesTotal();
