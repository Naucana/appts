"use strict";
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
console.log(palabrasCapitalizar("felipe", "reyes"));
console.log(palabrasCapitalizar("Antonio", "garcia", false));
//# sourceMappingURL=app1.js.map