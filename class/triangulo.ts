import { Figura } from './figura';


export class Triangulo extends Figura {
    area(): number {
        return (this.ancho * this.alto) / 2;
    }

    constructor(ancho: number, alto: number) {
        super(ancho, alto);
    }
}