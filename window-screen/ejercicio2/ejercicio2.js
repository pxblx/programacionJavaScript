/**
 * Ejercicio 2
 * 
 * @author Pablo
 */

{
    let eventos = function () {
        let p = document.getElementById("info");
        p.innerHTML = ("<b>Scroll X:</b> " + scrollX + "<br/>" +
            "<b>Scroll Y:</b> " + scrollY + "<br/>" +
            "<b>Scrollbars:</b> " + scrollbars.visible);
    }

    let bajarLinea = function () {
        scroll(scrollX, scrollY + 5);
    }

    let subirLinea = function () {
        scroll(scrollX, scrollY - 5);
    }

    let bajar = function () {
        scroll(scrollX, scrollY + innerHeight);
    }

    let subir = function () {
        scroll(scrollX, scrollY - innerHeight);
    }

    let inicio = function () {
        scroll(scrollX, scrollY - document.body.scrollHeight);
    }

    let fin = function () {
        scroll(scrollX, scrollY + document.body.scrollHeight);
    }

    let crearBotones = function () {
        let funciones = [[bajarLinea, "Bajar línea"], [subirLinea, "Subir línea"], [bajar, "Bajar"],
            [subir, "Subir"], [inicio, "Inicio"], [fin, "Fin"]];
        for (let i = 0; i < funciones.length; i++) {
            let boton = document.createElement("button");
            boton.addEventListener("click", funciones[i][0]);
            boton.innerHTML = funciones[i][1];
            document.body.appendChild(boton);
        }
    }

    let generarLineas = function () {
        for (let i = 1; i <= 20; i++) {
            let p = document.createElement("p");
            p.innerHTML = "Línea " + i + "<br/>";
            document.body.appendChild(p);
        }
    }

    let init = function () {
        eventos();
        crearBotones();
        generarLineas();
        addEventListener("scroll", eventos);
    }

    addEventListener("DOMContentLoaded", init);
}
