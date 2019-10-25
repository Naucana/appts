class Circulo extends Figura {
    area(): number {
        return (Math.PI * Math.pow(this.ancho, 2));
    }

    constructor(ancho: number) {
        super(ancho/2);
    }
}