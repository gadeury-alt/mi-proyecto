class Vehiculo {
  _precio;
  _vendido;

  constructor(
    marca,
    modelo,
    anio,
    precio
  ) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this._precio = precio;
    this._vendido = false;
  }

  get precio() {
    return this._precio;
  }

  get vendido() {
    return this._vendido;
  }

  aplicarDescuento(porcentaje) {
    if (porcentaje < 0 || porcentaje > 50) {
      throw new Error("Descuento inválido");
    }
    this._precio = this._precio - (this._precio * porcentaje) / 100;
  }

  marcarVendido() {
    this._vendido = true;
  }

  describir() {
    return `${this.marca} ${this.modelo} (${this.anio})`;
  }
}

class Carro extends Vehiculo {
  constructor(
    marca,
    modelo,
    anio,
    puertas,
    precio
  ) {
    super(marca, modelo, anio, precio);
    this.puertas = puertas;
  }

  describir() {
    return `${super.describir()} - ${this.puertas} puertas`;
  }
}

class Moto extends Vehiculo {
  constructor(
    marca,
    modelo,
    anio,
    cilindrada,
    precio
  ) {
    super(marca, modelo, anio, precio);
    this.cilindrada = cilindrada;
  }

  describir() {
    return `${super.describir()} - ${this.cilindrada}cc`;
  }
}

// ------------------- Uso actual del módulo -------------------

const carro = new Carro("Toyota", "Corolla", 2023, 4, 850000);
const moto = new Moto("Honda", "CBR500", 2022, 500, 420000);

console.log(carro.describir());
console.log(moto.describir());

carro.aplicarDescuento(10);
moto.marcarVendido();

console.log(carro.precio);
console.log(moto.vendido);