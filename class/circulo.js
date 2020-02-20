"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const figura_1 = require("./figura");
class Circulo extends figura_1.Figura {
    area() {
        return (Math.PI * Math.pow(this.ancho, 2));
    }
    constructor(ancho) {
        super(ancho / 2);
    }
}
exports.Circulo = Circulo;
//# sourceMappingURL=circulo.js.map