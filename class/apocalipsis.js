"use strict";
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
//# sourceMappingURL=apocalipsis.js.map