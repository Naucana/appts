// abstract class Persona {
//     private nombre: string;
//     private rol: string;
//     private _edad: number;
//     private static dni: number = 0;

//     constructor(nombre: string, rol: string, edad: number) {
//         this.nombre = nombre;
//         this.rol = rol;
//         this._edad = edad;
//         Persona.dni += 1;
//     }

//     get edad(): number {
//         return this._edad;
//     }

//     set edad(edad: number) {
//         this._edad = edad;
//     }

//     abstract crearEdad(edad : number): void;

//     toString(): string {
//         return `Datos de la persona: ${this.nombre}, ROL:${this.rol}, EDAD:${this.edad}, DNI:${Persona.dni}`;
//     }
// }