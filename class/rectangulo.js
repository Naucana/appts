"use strict";
class Rectangulo extends Figura {
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
        return dibujo;
    }
}
//# sourceMappingURL=rectangulo.js.map