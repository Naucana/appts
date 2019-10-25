abstract class Figura {
    _ancho: number = 0;
    _alto: number = 0;

    constructor(ancho?: number, alto?: number) {
        if (ancho) {
            this._ancho = ancho;
        }
        if (alto) {
            this._alto = alto;
        }
    }

    get ancho(): number {
        return this._ancho
    }
    set ancho(ancho: number) {
        this._ancho = ancho;
    }
    get alto(): number {
        return this._alto;
    }
    set alto(alto: number) {
        this._alto = alto;
    }

    abstract area(): number;
}