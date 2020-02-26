"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./class/usuario");
// Ejemplos con la clase usuario, la cual extiende de la clase abstracta Persona
let u1;
u1 = new usuario_1.Usuario(1, "Antonio", "Direccion", 40);
console.log(u1.toString());
let u2;
u2 = new usuario_1.Usuario(2, "Jose", "Direccion", 40);
console.log(u2.toString());
let u3;
u3 = new usuario_1.Usuario(3, "Verdiro", "Direccion", 40);
console.log(u3.toString());
//# sourceMappingURL=app4.js.map