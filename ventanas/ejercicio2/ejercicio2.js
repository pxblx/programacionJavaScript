/**
 * Ejercicio 2
 * 
 * @author Pablo
 */

{
    let numVentanas = 5;
    let ventanas = [];

    let nuevaVentana = function (num) {
        let ventana = window.open("", "Ventana emergente" + num, "height=200, width=300");
        ventana.document.write("<!DOCTYPE html><html lang=\"es\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><script defer src=\"emergente.js\"></script><title>Ventana emergente " + num + "</title></head><body><p>Ventana " + num + "</p><input type=\"button\" id=\"close\" value=\"Cerrar ventana\"></body></html>");
        ventana.document.close();
        return ventana;
    }

    let abrirVentanas = function (num) {
        for (i = 0; i < num; i++) {
            ventanas.push(nuevaVentana(i + 1));
        }
    }

    let cerrarVentanas = function () {
        ventanas.forEach(ventana => {
            ventana.close();
        });
        ventanas = [];
    }

    let init = function () {
        document.getElementById("texto").innerHTML = "Número de ventanas: " + numVentanas;
        document.getElementById("abrir").addEventListener("click", function () {
            abrirVentanas(numVentanas)
        });
        document.getElementById("cerrar").addEventListener("click", cerrarVentanas);
    }

    window.addEventListener("DOMContentLoaded", init);
}
