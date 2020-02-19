import { Usuario } from './class/usuario';


console.log("Hola Mundo");



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




// Ejemplo con la clase Figura. Página 2 de las diapos.

// let fig = new Figura; 
// fig.ancho = 10;
// fig.alto = 5;
// console.log(fig.ancho + "x" + fig.alto);
// La clase Figura pasa a ser abstracta para los ejemplos siguientes, por tanto, el ejemplo anterior queda invalidado porque no podemos llamar al constructor de una clase abstracta
let cuadrado = new Rectangulo(6, 6);
let rectangulo = new Rectangulo(10, 5);
let trianguloRectangulo = new Triangulo(7, 5);
let circunferencia = new Circulo(6);
let trianguloIsosceles = new Triangulo(4, 8);
let rectangulo2 = new Rectangulo(17, 5);


let listaFiguras: Figura[] = new Array()//[];
listaFiguras.push(cuadrado);
listaFiguras.push(rectangulo);
listaFiguras.push(trianguloIsosceles);
listaFiguras.push(trianguloRectangulo);
listaFiguras.push(rectangulo2);
listaFiguras.push(circunferencia);

listaFiguras.forEach(element => {
    console.log("El área del ", element, " es ", element.area);
    // if (typeof element === typeof Rectangulo){
    //     dibujar();
    // }
});