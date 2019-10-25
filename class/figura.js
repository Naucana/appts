"use strict";
class Figura {
    constructor(ancho, alto) {
        this._ancho = 0;
        this._alto = 0;
        if (ancho) {
            this._ancho = ancho;
        }
        if (alto) {
            this._alto = alto;
        }
    }
    get ancho() {
        return this._ancho;
    }
    set ancho(ancho) {
        this._ancho = ancho;
    }
    get alto() {
        return this._alto;
    }
    set alto(alto) {
        this._alto = alto;
    }
}
//# sourceMappingURL=figura.js.map