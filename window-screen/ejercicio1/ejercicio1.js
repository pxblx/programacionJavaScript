/**
 * Ejercicio 1
 * 
 * @author Pablo
 */

{
    let init = function () {
        let elementos = [["window.outerHeight", outerHeight, "Devuelve la altura en pixeles de toda la ventana del navegador"],
            ["window.innerHeight", innerHeight, "Devuelve la altura en píxeles del espacio disponible que tiene la ventana para mostrar el contenido"],
            ["window.screen.availHeight", screen.availHeight, "Devuelve la altura disponible de la pantalla en píxeles"],
            ["window.screen.height", screen.height, "Devuelve la altura de la pantalla en píxeles"]];
        
        let ul = document.createElement("ul");
        document.body.appendChild(ul);
        elementos.forEach(elemento => {
            let li = document.createElement("li");
            li.innerHTML = "<b>" + elemento[0] + " ("+ elemento[1] +"):</b> " + elemento[2] + ".";
            ul.appendChild(li);
        });
    }

    addEventListener("DOMContentLoaded", init);
}
