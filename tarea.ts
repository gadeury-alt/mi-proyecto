/**
 * EJERCICIO PRÃCTICO â€” SEMANA 2
 * ProgramaciÃ³n Avanzada I (PCO-106)
 *
 * Este cÃ³digo funciona, pero estÃ¡ escrito en JavaScript plano y repite
 * lÃ³gica entre los dos tipos de vehÃ­culo (Carro y Moto).
 *
 * TU TAREA: refactorizar este mÃ³dulo hacia clases TypeScript tipadas.
 *
 * Pasos sugeridos:
 *   1. Identifica quÃ© propiedades y comportamiento se repiten entre
 *      carro y moto (son casi el mismo objeto con un par de campos distintos).
 *   2. ConviÃ©rtelos en clases con constructor y propiedades tipadas.
 *   3. Aplica modificadores de acceso donde corresponda
 *      (por ejemplo: precio y vendido no deberÃ­an modificarse libremente
 *      desde fuera de la clase).
 *   4. Como hay comportamiento compartido, crea una clase base (Vehiculo)
 *      y usa herencia (extends) para Carro y Moto.
 *
 * No es necesario conservar los nombres de las funciones tal cual â€”
 * el objetivo es el diseÃ±o de clases, no la sintaxis exacta.
 */

function crearCarro(marca, modelo, anio, puertas, precio) {
  return {
    tipo: "carro",
    marca: marca,
    modelo: modelo,
    anio: anio,
    puertas: puertas,
    precio: precio,
    vendido: false,
  };
}

function crearMoto(marca, modelo, anio, cilindrada, precio) {
  return {
    tipo: "moto",
    marca: marca,
    modelo: modelo,
    anio: anio,
    cilindrada: cilindrada,
    precio: precio,
    vendido: false,
  };
}

function describirCarro(carro) {
  return carro.marca + " " + carro.modelo + " (" + carro.anio + ") - " + carro.puertas + " puertas";
}

function describirMoto(moto) {
  return moto.marca + " " + moto.modelo + " (" + moto.anio + ") - " + moto.cilindrada + "cc";
}

function aplicarDescuento(vehiculo, porcentaje) {
  if (porcentaje < 0 || porcentaje > 50) {
    throw new Error("Descuento invÃ¡lido");
  }
  vehiculo.precio = vehiculo.precio - (vehiculo.precio * porcentaje) / 100;
}

function marcarVendido(vehiculo) {
  vehiculo.vendido = true;
}

// ------------------- Uso actual del mÃ³dulo -------------------

const carro1 = crearCarro("Toyota", "Corolla", 2023, 4, 850000);
const moto1 = crearMoto("Honda", "CBR500", 2022, 500, 420000);

console.log(describirCarro(carro1));
console.log(describirMoto(moto1));

aplicarDescuento(carro1, 10);
marcarVendido(moto1);

console.log(carro1.precio);
console.log(moto1.vendido);