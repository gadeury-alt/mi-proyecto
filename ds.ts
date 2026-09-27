class Vehiculo {
  constructor(
    protected marca: string,
    protected modelo: string,
    protected anio: number,
    protected precio: number
  ) {}

  describir(): string {
    return `${this.marca} ${this.modelo} (${this.anio}) - $${this.precio}`;
  }
}

class Carro extends Vehiculo {
  constructor(
    marca: string,
    modelo: string,
    anio: number,
    public puertas: number,
    precio: number
  ) {
    super(marca, modelo, anio, precio);
  }

  override describir(): string {
    return `${super.describir()} - ${this.puertas} puertas`;
  }
}

class Moto extends Vehiculo {
  constructor(
    marca: string,
    modelo: string,
    anio: number,
    public cilindrada: number,
    precio: number
  ) {
    super(marca, modelo, anio, precio);
  }

  override describir(): string {
    return `${super.describir()} - ${this.cilindrada}cc`;
  }
}

const carro1 = new Carro("Toyota", "Corolla", 2023, 4, 850000);
const moto1 = new Moto("Honda", "CBR500", 2022, 500, 420000);

console.log(carro1.describir());
console.log(moto1.describir());