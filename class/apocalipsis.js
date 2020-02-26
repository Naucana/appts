"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Nótese que hay que exportar, tanto el namespace (para usarlo en app5) como la clase ya que,
// si no se exporta la clase, no se podría utilizar por mucho que se importe el namespace
var Aplicacion;
(function (Aplicacion) {
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
    Aplicacion.Apocalipsis = Apocalipsis;
})(Aplicacion = exports.Aplicacion || (exports.Aplicacion = {}));
//# sourceMappingURL=apocalipsis.js.map