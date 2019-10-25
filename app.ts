import { Usuario } from './class/usuario';


console.log("Hola Mundo");

let variable: any = "Pruebas";
let numero: string = <string>variable.length;
console.log(numero);

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



// Ejemplo con la clase singleton Apocalipsis
let apc: Apocalipsis = Apocalipsis.getInstance();
console.log(apc.nombre);


interface Movimiento {
    (velocidadInicio: number, aceleracion: number): number;
}

let calVelocidad: Movimiento = function (vIni: number, acc: number) {
    return vIni + acc;
}

let Pais: { capital: string, idioma: string, CEE: boolean, getCapital: () => string } = {
    capital: "Portugal",
    idioma: "PT",
    CEE: true,
    getCapital() {
        return this.capital;
    }
}

type Paises = {
    capital: string,
    idioma: string,
    CEE: boolean,
    getCapital: () => string;
}

let portugal: Paises = {
    capital: "Portugal",
    idioma: "PT",
    CEE: true,
    getCapital() {
        return this.capital;
    }
}


let varios: string | number | boolean;

varios = "Esto es string";
console.log(typeof varios);

varios = 33;
console.log(typeof varios);

varios = true;
console.log(typeof varios);


// Destructuracion
let listaCoches = {
    c1: "ford",
    c2: "renault",
    c3: "seat"
}

// let {c1,c2,c3} = listaCoches;
// console.log(c3);

// let {c1,c2:familiar,c3} = listaCoches;
// console.log(familiar);

let { c1, c2: familiar, c3, c4 = "Citroen" } = listaCoches;
console.log(c4);


function palabrasCapitalizar(nombre: string, apellido?: string, capitalizado: boolean = true): string {
    if (apellido) {
        if (capitalizado) {
            return capitalizar(nombre) + " " + capitalizar(apellido);
        } else {
            return nombre + " " + apellido;
        }
    } else {
        if (capitalizado) {
            return capitalizar(nombre);
        } else {
            return nombre;
        }
    }
}

function capitalizar(palabra: string): string {
    return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}


function correcto() {
    console.log("TOdo correcto!");
}


function incorrecto() {
    console.log("TOdo Maaaaal!");
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


// Ejemplo con la clase Figura
// let fig = new Figura; 
// fig.ancho = 10;
// fig.alto = 5;
// console.log(fig.ancho + "x" + fig.alto);
// La clase Figura pasa a ser abstracta para los ejemplos siguientes, por tanto, el ejemplo anterior queda invalidado porque no podemos llamar al constructor de una clase abstracta
let cuadrado = new Rectangulo(6, 6);
let rectangulo = new Rectangulo(10, 5);
let trianguloRectangulo = new Triangulo(7,5);
let circunferencia = new Circulo(6);
let trianguloIsosceles = new Triangulo(4,8);
let rectangulo2 = new Rectangulo(17,5);


let listaFiguras: Figura[] = new Array()//[];
listaFiguras.push(cuadrado);
listaFiguras.push(rectangulo);
listaFiguras.push(trianguloIsosceles);
listaFiguras.push(trianguloRectangulo);
listaFiguras.push(rectangulo2);
listaFiguras.push(circunferencia);

listaFiguras.forEach(element => {
    console.log("El área del ", element, " es ",  element.area)
    // if (typeof element === typeof Rectangulo){
    //     dibujar();
    // }
});