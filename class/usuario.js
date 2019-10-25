"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./persona");
class Usuario extends persona_1.Persona {
    constructor(idUsuario, nombre, rol, edad) {
        super(nombre, rol, edad);
        this.idUsuario = idUsuario;
    }
    toString() {
        return super.toString() + "id: " + this.idUsuario;
    }
    crearEdad(edad) {
        this.edad = edad;
    }
}
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map