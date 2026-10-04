"use strict";
class RegistroNoEncontradoError extends Error {
    id;
    constructor(id) {
        super(`No se encontró ningún registro con id ${id}`);
        this.id = id;
        this.name = "RegistroNoEncontradoError";
        Object.setPrototypeOf(this, RegistroNoEncontradoError.prototype);
    }
}
class Repository {
    items = [];
    agregar(item) {
        this.items.push(item);
    }
    obtenerTodos() {
        return [...this.items];
    }
    buscarPorId(id) {
        const encontrado = this.items.find((item) => item.id === id);
        if (!encontrado) {
            throw new RegistroNoEncontradoError(id);
        }
        return encontrado;
    }
}
const productos = new Repository();
const usuarios = new Repository();
productos.agregar({ id: 1, nombre: "Teclado", precio: 1200 });
productos.agregar({ id: 2, nombre: "Mouse", precio: 450 });
usuarios.agregar({ id: 1, nombre: "Ana" });
console.log(productos.obtenerTodos());
try {
    const producto = productos.buscarPorId(99);
    console.log(producto);
}
catch (error) {
    if (error instanceof RegistroNoEncontradoError) {
        console.error(`Error controlado: ${error.message}`);
    }
    else {
        throw error;
    }
}
try {
    console.log(usuarios.buscarPorId(1));
}
catch (error) {
    if (error instanceof RegistroNoEncontradoError) {
        console.error(error.message);
    }
}
