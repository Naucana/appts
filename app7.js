"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=app7.js.map