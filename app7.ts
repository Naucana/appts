import { Circulo } from './class/circulo';
import { Rectangulo } from './class/rectangulo';
import { Triangulo } from './class/triangulo';

let listaFiguras: Rectangulo[] | Triangulo[] | Circulo[] = new Array();
listaFiguras.push(new Rectangulo(6, 6));
listaFiguras.push(new Rectangulo(10, 5));
listaFiguras.push(new Triangulo(7, 5));
listaFiguras.push(new Triangulo(4, 8));
listaFiguras.push(new Rectangulo(17, 5));
listaFiguras.push(new Circulo(6));

for(let element of listaFiguras){
    console.log("El área del ", element, " es ", element.area());
    if (element.dibujar){
        element.dibujar();
    }
};