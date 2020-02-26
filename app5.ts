import { Aplicacion } from './class/apocalipsis'; // Nota: Se importa el Namespace, el cual contiene a la clase

// Ejemplo con la clase singleton Apocalipsis dentro de un Namespace Aplicacion
let apc: Aplicacion.Apocalipsis = Aplicacion.Apocalipsis.getInstance();
console.log(apc.nombre);