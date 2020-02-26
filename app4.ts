import { Usuario } from './class/usuario';

// Ejemplos con la clase usuario, la cual extiende de la clase abstracta Persona
let u1: Usuario;
u1 = new Usuario(1, "Antonio", "Direccion", 40);
console.log(u1.toString());

let u2: Usuario;
u2 = new Usuario(2, "Jose", "Direccion", 40);
console.log(u2.toString());

let u3: Usuario;
u3 = new Usuario(3, "Verdiro", "Direccion", 40);
console.log(u3.toString());
