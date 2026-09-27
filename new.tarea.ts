export {};

class Vehiculo {
  protected _precio: number;
  private _vendido: boolean;

  constructor(
    public marca: string,
    public modelo: string,
    public anio: number,
    precio: number
  ) {
    this._precio = precio;
    this._vendido = false;
  }

  get precio(): number {
    return this._precio;
  }

  get vendido(): boolean {
    return this._vendido;
  }

  aplicarDescuento(porcentaje: number): void {
    if (porcentaje < 0 || porcentaje > 50) {
      throw new Error("Descuento inválido");
    }
    this._precio = this._precio - (this._precio * porcentaje) / 100;
  }

  marcarVendido(): void {
    this._vendido = true;
  }

  describir(): string {
    return `${this.marca} ${this.modelo} (${this.anio})`;
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

// ------------------- Uso actual del módulo -------------------

const carro = new Carro("Toyota", "Corolla", 2023, 4, 850000);
const moto = new Moto("Honda", "CBR500", 2022, 500, 420000);

console.log(carro.describir());
console.log(moto.describir());

carro.aplicarDescuento(10);
moto.marcarVendido();

console.log(carro.precio);
console.log(moto.vendido);