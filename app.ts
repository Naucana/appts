console.log("Hola Mundo");

let variable: any = "Pruebas";
let numero: string = <string>variable.length;
console.log(numero);

abstract class Persona {
    private nombre: string;
    private rol: string;
    private _edad: number;
    private static dni: number = 0;

    constructor(nombre: string, rol: string, edad: number) {
        this.nombre = nombre;
        this.rol = rol;
        this._edad = edad;
        Persona.dni += 1;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(edad: number) {
        this._edad = edad;
    }

    abstract crearEdad(edad: number): void;

    toString(): string {
        return `Datos de la persona: ${this.nombre}, ROL:${this.rol}, EDAD:${this.edad}, DNI:${Persona.dni}`;
    }
}

class Usuario extends Persona {
    private idUsuario: number;

    constructor(idUsuario: number, nombre: string, rol: string, edad: number) {
        super(nombre, rol, edad);
        this.idUsuario = idUsuario;
    }

    toString(): string {
        return super.toString() + "id: " + this.idUsuario;
    }

    crearEdad(edad: number) {
        this.edad = edad;
    }
}

let u1: Usuario;
u1 = new Usuario(1, "Antonio", "Direccion", 40);
console.log(u1.toString());

let u2: Usuario;
u2 = new Usuario(2, "Jose", "Direccion", 40);
console.log(u2.toString());

let u3: Usuario;
u3 = new Usuario(3, "Verdiro", "Direccion", 40);
console.log(u3.toString());


class Figura {
    private _ancho: number = 0;
    private _alto: number = 0;

    constructor(ancho?: number, alto?: number) {
        if (ancho) {
            this._ancho = ancho;
        }
        if (alto) {
            this._alto = alto;
        }
    }
    get ancho(): number {
        return this._ancho;
    }
    get alto(): number {
        return this._alto;
    }
    set ancho(ancho: number) {
        this._ancho = ancho;
    }
    set alto(alto: number) {
        this._alto = alto;
    }
}

let fig = new Figura;
fig.ancho = 10;
fig.alto = 5;
console.log(fig.ancho + "x" + fig.alto);

class Apocalipsis {
    static instancia: Apocalipsis;

    private constructor(public nombre: string) { }

    static getInstance() {
        if (!Apocalipsis.instancia)
            Apocalipsis.instancia = new Apocalipsis("The End!");
        return Apocalipsis.instancia;
    }
}

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

abstract class Figuras {
    _ancho: number = 0;
    _alto: number = 0;

    constructor(ancho?: number, alto?: number) {
        if (ancho) {
            this._ancho = ancho;
        }
        if (alto) {
            this._alto = alto;
        }
    }

    get ancho(): number {
        return this._ancho
    }
    set ancho(ancho: number) {
        this._ancho = ancho;
    }
    get alto(): number {
        return this._alto;
    }
    set alto(alto: number) {
        this._alto = alto;
    }

    abstract area(): number;
}

class Rectangulo extends Figuras {
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

class Triangulo extends Figuras {
    area(): number {
        return (this.ancho * this.alto) / 2;
    }

    constructor(ancho: number, alto: number) {
        super(ancho, alto);
    }
}
class Circulo extends Figuras {
    area(): number {
        return (Math.PI * Math.pow(this.ancho / 2, 2));
    }

    constructor(ancho: number) {
        super(ancho/2);
    }
}

let cuadrado = new Rectangulo(6, 4);
console.log(cuadrado.dibujar());