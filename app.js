"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./class/usuario");
console.log("Hola Mundo");
let variable = "Pruebas";
let numero = variable.length;
console.log(numero);
// Ejemplos con la clase usuario, la cual extiende de la clase abstracta Persona
let u1;
u1 = new usuario_1.Usuario(1, "Antonio", "Direccion", 40);
console.log(u1.toString());
let u2;
u2 = new usuario_1.Usuario(2, "Jose", "Direccion", 40);
console.log(u2.toString());
let u3;
u3 = new usuario_1.Usuario(3, "Verdiro", "Direccion", 40);
console.log(u3.toString());
// Ejemplo con la clase singleton Apocalipsis
let apc = Apocalipsis.getInstance();
console.log(apc.nombre);
let calVelocidad = function (vIni, acc) {
    return vIni + acc;
};
let Pais = {
    capital: "Portugal",
    idioma: "PT",
    CEE: true,
    getCapital() {
        return this.capital;
    }
};
let portugal = {
    capital: "Portugal",
    idioma: "PT",
    CEE: true,
    getCapital() {
        return this.capital;
    }
};
let varios;
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
};
// let {c1,c2,c3} = listaCoches;
// console.log(c3);
// let {c1,c2:familiar,c3} = listaCoches;
// console.log(familiar);
let { c1, c2: familiar, c3, c4 = "Citroen" } = listaCoches;
console.log(c4);
function palabrasCapitalizar(nombre, apellido, capitalizado = true) {
    if (apellido) {
        if (capitalizado) {
            return capitalizar(nombre) + " " + capitalizar(apellido);
        }
        else {
            return nombre + " " + apellido;
        }
    }
    else {
        if (capitalizado) {
            return capitalizar(nombre);
        }
        else {
            return nombre;
        }
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substring(1).toLowerCase();
}
function correcto() {
    console.log("TOdo correcto!");
}
function incorrecto() {
    console.log("TOdo Maaaaal!");
}
let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let numero = Math.round(Math.random() * 1000);
        let par = (numero % 2) == 0;
        if (par) {
            console.log("el numero es par");
            resolve();
        }
        else {
            console.log("el numero es impar");
            reject();
        }
    }, 1500);
});
promesa.then(correcto, incorrecto);
console.log("después de la llamada");
class Saludo {
    static creaSaludo(nombre) {
        if (nombre) {
            return `Hola ${nombre}`;
        }
        else {
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
let trianguloRectangulo = new Triangulo(7, 5);
let circunferencia = new Circulo(6);
let trianguloIsosceles = new Triangulo(4, 8);
let rectangulo2 = new Rectangulo(17, 5);
let listaFiguras = new Array(); //[];
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
//# sourceMappingURL=app.js.map