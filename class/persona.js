"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(nombre, rol, edad) {
        this.nombre = nombre;
        this.rol = rol;
        this._edad = edad;
        Persona.dni += 1;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return `Datos de la persona: ${this.nombre}, ROL:${this.rol}, EDAD:${this.edad}, DNI:${Persona.dni}`;
    }
}
exports.Persona = Persona;
Persona.dni = 0;
//# sourceMappingURL=persona.js.map