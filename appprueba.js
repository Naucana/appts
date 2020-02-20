"use strict";
class Figura {
    constructor(ancho, alto) {
        this._ancho = 0;
        this._alto = 0;
        if (ancho) {
            this._ancho = ancho;
        }
        if (alto)
            this._alto = alto;
    }
    static numero() {
        return this.numeroFigura;
    }
    get ancho() {
        return this._ancho;
    }
    get alto() {
        return this._alto;
    }
    set ancho(ancho) {
        this._ancho = ancho;
    }
    set alto(alto) {
        this._alto = alto;
    }
}
Figura.numeroFigura = 0;
class Rectangulo extends Figura {
    area() {
        return this.ancho * this.alto;
    }
    constructor(ancho, alto) {
        super(ancho, alto);
    }
    dibujar() {
        let dibujo = '';
        for (let a = 0; a <= this.alto; a++) {
            for (let b = 0; b <= this.ancho; b++) {
                dibujo = dibujo + ' *';
            }
            dibujo = dibujo + "\n";
        }
        console.log(dibujo);
    }
}
class Triangulo extends Figura {
    area() {
        return this.ancho * this.alto / 2;
    }
    constructor(ancho, alto) {
        super(ancho, alto);
    }
}
class Circulo extends Figura {
    area() {
        return Math.PI * Math.pow(this.ancho / 2, 2);
    }
    constructor(radio) {
        super(radio * 2, radio * 2);
    }
}
let lista = new Array(); //[];
lista.push(new Rectangulo(10, 5));
lista.push(new Triangulo(10, 5));
lista.push(new Circulo(7.5));
lista.push(new Triangulo(10, 5));
lista.push(new Circulo(10));
lista.push(new Rectangulo(20, 5));
lista.push(new Rectangulo(5, 5));
let fig = lista[0];
console.log(fig);
for (let fig of lista) {
    console.log(fig.area());
    if (fig.dibujar) {
        let figCua = fig;
        figCua.dibujar();
    }
}
//# sourceMappingURL=appprueba.js.map