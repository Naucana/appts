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

console.log(palabrasCapitalizar("felipe", "reyes"));
console.log(palabrasCapitalizar("Antonio", "garcia", false));