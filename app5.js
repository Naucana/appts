"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apocalipsis_1 = require("./class/apocalipsis"); // Nota: Se importa el Namespace, el cual contiene a la clase
// Ejemplo con la clase singleton Apocalipsis dentro de un Namespace Aplicacion
let apc = apocalipsis_1.Aplicacion.Apocalipsis.getInstance();
console.log(apc.nombre);
//# sourceMappingURL=app5.js.map