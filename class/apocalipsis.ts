// Nótese que hay que exportar, tanto el namespace (para usarlo en app5) como la clase ya que,
// si no se exporta la clase, no se podría utilizar por mucho que se importe el namespace
export namespace Aplicacion {
    export class Apocalipsis {
        static instancia: Apocalipsis;

        private constructor(public nombre: string) { }

        static getInstance() {
            if (!Apocalipsis.instancia)
                Apocalipsis.instancia = new Apocalipsis("The End!");
            return Apocalipsis.instancia;
        }
    }
}