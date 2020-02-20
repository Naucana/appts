"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./class/usuario");
const apocalipsis_1 = require("./class/apocalipsis");
const circulo_1 = require("./class/circulo");
const rectangulo_1 = require("./class/rectangulo");
const triangulo_1 = require("./class/triangulo");
let listaFiguras = new Array();
listaFiguras.push(new rectangulo_1.Rectangulo(6, 6));
listaFiguras.push(new rectangulo_1.Rectangulo(10, 5));
listaFiguras.push(new triangulo_1.Triangulo(7, 5));
listaFiguras.push(new triangulo_1.Triangulo(4, 8));
listaFiguras.push(new rectangulo_1.Rectangulo(17, 5));
listaFiguras.push(new circulo_1.Circulo(6));
for (let element of listaFiguras) {
    console.log("El área del ", element, " es ", element.area());
    if (element.dibujar) {
        element.dibujar();
    }
}
;
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
let calVelocidad = function (vIni, acc) {
    return vIni + acc;
};
// Ejemplo con la clase singleton Apocalipsis - App5
let apc = apocalipsis_1.Apocalipsis.getInstance();
console.log(apc.nombre);
// Creacion de clase con metodo estatico que pueda recibir un parametro o no - App6
class Saludo {
    static creaSaludo(nombre) {
        if (nombre) {
            return `Hola ${nombre}`;
        }
        else {
            return `No hablo con desconocidos`;
        }
    }
}
console.log(Saludo.creaSaludo());
console.log(Saludo.creaSaludo("Gilipollas"));
function correcto() {
    console.log("Todo correcto!");
}
function incorrecto() {
    console.log("Todo Maaaaal!");
}
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let numero = Math.round(Math.random() * 1000);
        let par = (numero % 2) == 0;
        if (par) {
            console.log("el numero es par");
            resolve();
        }
        else {
            console.log("el numero es impar");
            reject();
        }
    }, 1500);
});
promesa.then(correcto, incorrecto);
console.log("después de la llamada");
//# sourceMappingURL=app.js.map