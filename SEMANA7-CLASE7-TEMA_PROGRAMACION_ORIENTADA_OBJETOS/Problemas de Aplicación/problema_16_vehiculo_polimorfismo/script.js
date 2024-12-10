/**
 * Crear una clase base Vehiculo con un método mover(), y subclases Coche y
Bicicleta que implementen este método de forma diferente.
 */

class Vehiculo {
  constructor(peso, velMax) {
    this.peso = peso;
    this.velMax = velMax;
  }

  mover() {
    console.log(`El vehículo se mueve a una velocidad de ${this.velMax}`);
  }
}

class Carro extends Vehiculo {
  constructor(peso, velMax, cantPuertas) {
    super(peso, velMax);
    this.cantPuertas = cantPuertas;
  }

  mover() {
    console.log(
      `El carro se mueve en la carretera con una velocidad de ${this.velMax} km/h`
    );
  }
}

class Bicicleta extends Vehiculo {
  constructor(peso, velMax, color) {
    super(peso, velMax, color);
    this.color = color;
  }

  mover() {
    console.log(
      `La bicicleta ${this.color} se mueve por la cicloruta a una velocidad de ${this.velMax} Km/h`
    );
  }
}

const carro = new Carro(2000, 120, 2);
carro.mover();

const bicicleta = new Bicicleta(50, 40, "Roja");
bicicleta.mover();
