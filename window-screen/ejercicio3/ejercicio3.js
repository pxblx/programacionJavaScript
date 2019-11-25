/**
 * Ejercicio 3
 * 
 * @author Pablo
 */

{
    let init = function () {
        let p = document.createElement("p");
        p.innerHTML = ("<b>URL:</b> " + location.href + "<br/>" +
        "<b>Protocolo:</b> " + location.protocol + "<br/>" +
        "<b>Host:</b> " + location.host + "<br/>" +
        "<b>Hostname:</b> " + location.hostname + "<br/>" +
        "<b>Puerto:</b> " + location.port);
        document.body.appendChild(p);
    }

    addEventListener("DOMContentLoaded", init);
}
