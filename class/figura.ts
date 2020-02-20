export abstract class Figura {
    private _ancho: number = 0;
    private _alto: number = 0;

    constructor(ancho?: number, alto?: number) {
        if (ancho) {
            this._ancho = ancho;
        }
        if (alto) {
            this._alto = alto;
        }
    }

    public get ancho(): number {
        return this._ancho
    }
    public set ancho(ancho: number) {
        this._ancho = ancho;
    }
    public get alto(): number {
        return this._alto;
    }
    public set alto(alto: number) {
        this._alto = alto;
    }

    abstract area(): number;
}