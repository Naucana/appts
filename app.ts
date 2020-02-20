import { Usuario } from './class/usuario';
import { Apocalipsis } from './class/apocalipsis';
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



// Ejemplos con la clase usuario, la cual extiende de la clase abstracta Persona
let u1: Usuario;
u1 = new Usuario(1, "Antonio", "Direccion", 40);
console.log(u1.toString());

let u2: Usuario;
u2 = new Usuario(2, "Jose", "Direccion", 40);
console.log(u2.toString());

let u3: Usuario;
u3 = new Usuario(3, "Verdiro", "Direccion", 40);
console.log(u3.toString());




interface Movimiento {
    (velocidadInicio: number, aceleracion: number): number;
}

let calVelocidad: Movimiento = function (vIni: number, acc: number) {
    return vIni + acc;
}



// Ejemplo con la clase singleton Apocalipsis - App5
let apc: Apocalipsis = Apocalipsis.getInstance();
console.log(apc.nombre);


// Creacion de clase con metodo estatico que pueda recibir un parametro o no - App6
class Saludo {
    static creaSaludo(nombre?: string) {
        if (nombre) {
            return `Hola ${nombre}`;
        } else {
            return `No hablo con desconocidos`;
        }
    }
}

console.log(Saludo.creaSaludo());
console.log(Saludo.creaSaludo("Gilipollas"));


function correcto() {
    console.log("Todo correcto!");
}


function incorrecto() {
    console.log("Todo Maaaaal!");
}

let promesa = new Promise((resolve: Function, reject: Function) => {
    setTimeout(() => {
        let numero: number = Math.round(Math.random() * 1000);
        let par: boolean = (numero % 2) == 0;
        if (par) {
            console.log("el numero es par");
            resolve();
        } else {
            console.log("el numero es impar");
            reject();
        }
    }, 1500);
})

promesa.then(correcto, incorrecto);
console.log("después de la llamada");
