"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const figura_1 = require("./figura");
class Rectangulo extends figura_1.Figura {
    constructor(ancho, alto) {
        super(ancho, alto);
    }
    area() {
        return this.ancho * this.alto;
    }
    dibujar() {
        let dibujo = '';
        for (let i = 0; i < this.alto; i++) {
            for (let j = 0; j < this.ancho; j++) {
                dibujo = dibujo + ' *';
            }
            dibujo = dibujo + "\n";
        }
        console.log(dibujo);
    }
}
exports.Rectangulo = Rectangulo;
//# sourceMappingURL=rectangulo.js.map