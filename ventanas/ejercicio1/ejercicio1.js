/**
 * Ejercicio 1
 * 
 * @author Pablo
 */

{
    let init = function () {
        document.getElementById("button").addEventListener("click", function () {
            let ventana = window.open("", "Ventana emergente", "height=200, width=300");
            ventana.document.write("<!DOCTYPE html><html lang=\"es\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Ventana emergente</title></head><body><h1>Ventana emergente</h1><hr/><p>Se han utilizado las propiedades:</p><ul><li>height=" + ventana.innerHeight + "</li><li>width=" + ventana.innerWidth + "</li></ul></body></html>");
            ventana.document.close();
        });
    }

    window.addEventListener("DOMContentLoaded", init);
}
