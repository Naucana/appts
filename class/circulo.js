"use strict";
class Circulo extends Figura {
    area() {
        return (Math.PI * Math.pow(this.ancho, 2));
    }
    constructor(ancho) {
        super(ancho / 2);
    }
}
//# sourceMappingURL=circulo.js.map