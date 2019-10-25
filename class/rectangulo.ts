class Rectangulo extends Figura {
    constructor(ancho: number, alto: number) {
        super(ancho, alto);
    }

    area(): number {
        return this.ancho * this.alto;
    }

    dibujar(): string {
        let dibujo: string = '';
        for (let i = 0; i < this.alto; i++) {
            for (let j = 0; j < this.ancho; j++) {
                dibujo = dibujo + ' *';
            }
            dibujo = dibujo + "\n";
        }
        return dibujo;
    }
}