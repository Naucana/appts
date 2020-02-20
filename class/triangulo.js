"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const figura_1 = require("./figura");
class Triangulo extends figura_1.Figura {
    area() {
        return (this.ancho * this.alto) / 2;
    }
    constructor(ancho, alto) {
        super(ancho, alto);
    }
}
exports.Triangulo = Triangulo;
//# sourceMappingURL=triangulo.js.map