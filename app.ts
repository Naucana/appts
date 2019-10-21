console.log("Hola Mundo");

let variable:any = "Pruebas";
let numero:string = <string>variable.length;
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

    abstract crearEdad(edad : number): void;

    toString(): string {
        return `Datos de la persona: ${this.nombre}, ROL:${this.rol}, EDAD:${this.edad}, DNI:${Persona.dni}`;
    }
}

class Usuario extends Persona{
    private idUsuario: number;

    constructor(idUsuario: number, nombre: string, rol: string, edad: number){
        super(nombre,rol,edad);
        this.idUsuario = idUsuario;
    }

    toString(): string{
        return super.toString() + "id: " + this.idUsuario;
    }

    crearEdad(edad : number){
        this.edad = edad;        
    }
}

let u1:Usuario;
u1=new Usuario(1, "Antonio", "Direccion", 40);
console.log(u1.toString());

let u2:Usuario;
u2=new Usuario(2, "Jose", "Direccion", 40);
console.log(u2.toString());

let u3:Usuario;
u3=new Usuario(3, "Verdiro", "Direccion", 40);
console.log(u3.toString());


class Figura{
    private _ancho:number = 0;
    private _alto:number = 0;

    constructor(ancho?:number, alto?:number){
        if (ancho){
            this._ancho = ancho;
        }
        if (alto){
            this._alto = alto;
        }
    }
    get ancho():number{
        return this._ancho;
    }
    get alto():number{
        return this._alto;
    }
    set ancho(ancho:number){
        this._ancho=ancho;
    }
    set alto(alto:number){
        this._alto=alto;
    }
}

let fig = new Figura;
fig.ancho = 10;
fig.alto = 5;
console.log(fig.ancho + "x" + fig.alto);

class Apocalipsis{
    static instancia:Apocalipsis;

    private constructor(public nombre: string){}

    static getInstance(){
        if(!Apocalipsis.instancia)
            Apocalipsis.instancia = new Apocalipsis("The End!");
        return Apocalipsis.instancia;
    }
}

let apc:Apocalipsis = Apocalipsis.getInstance();
console.log(apc.nombre);