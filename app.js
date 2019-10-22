"use strict";
console.log("Hola Mundo");
let variable = "Pruebas";
let numero = variable.length;
console.log(numero);
class Persona {
    constructor(nombre, rol, edad) {
        this.nombre = nombre;
        this.rol = rol;
        this._edad = edad;
        Persona.dni += 1;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }
    toString() {
        return `Datos de la persona: ${this.nombre}, ROL:${this.rol}, EDAD:${this.edad}, DNI:${Persona.dni}`;
    }
}
Persona.dni = 0;
class Usuario extends Persona {
    constructor(idUsuario, nombre, rol, edad) {
        super(nombre, rol, edad);
        this.idUsuario = idUsuario;
    }
    toString() {
        return super.toString() + "id: " + this.idUsuario;
    }
    crearEdad(edad) {
        this.edad = edad;
    }
}
let u1;
u1 = new Usuario(1, "Antonio", "Direccion", 40);
console.log(u1.toString());
let u2;
u2 = new Usuario(2, "Jose", "Direccion", 40);
console.log(u2.toString());
let u3;
u3 = new Usuario(3, "Verdiro", "Direccion", 40);
console.log(u3.toString());
class Figura {
    constructor(ancho, alto) {
        this._ancho = 0;
        this._alto = 0;
        if (ancho) {
            this._ancho = ancho;
        }
        if (alto) {
            this._alto = alto;
        }
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
let fig = new Figura;
fig.ancho = 10;
fig.alto = 5;
console.log(fig.ancho + "x" + fig.alto);
class Apocalipsis {
    constructor(nombre) {
        this.nombre = nombre;
    }
    static getInstance() {
        if (!Apocalipsis.instancia)
            Apocalipsis.instancia = new Apocalipsis("The End!");
        return Apocalipsis.instancia;
    }
}
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
class Figuras {
    constructor(ancho, alto) {
        this._ancho = 0;
        this._alto = 0;
        if (ancho) {
            this._ancho = ancho;
        }
        if (alto) {
            this._alto = alto;
        }
    }
    get ancho() {
        return this._ancho;
    }
    set ancho(ancho) {
        this._ancho = ancho;
    }
    get alto() {
        return this._alto;
    }
    set alto(alto) {
        this._alto = alto;
    }
}
class Rectangulo extends Figuras {
    constructor(ancho, alto) {
        super(ancho, alto);
    }
    area() {
        return this.ancho * this.alto;
    }
    dibujar() {
        let dibujo = '';
        for (let i = 0; i < this.alto; i++) {
            for (let j = 0; j < this.ancho; j++) {
                dibujo = dibujo + ' *';
            }
            dibujo = dibujo + "\n";
        }
        return dibujo;
    }
}
class Triangulo extends Figuras {
    area() {
        return (this.ancho * this.alto) / 2;
    }
    constructor(ancho, alto) {
        super(ancho, alto);
    }
}
class Circulo extends Figuras {
    area() {
        return (Math.PI * Math.pow(this.ancho / 2, 2));
    }
    constructor(ancho) {
        super(ancho / 2);
    }
}
let cuadrado = new Rectangulo(6, 4);
console.log(cuadrado.dibujar());
//# sourceMappingURL=app.js.map