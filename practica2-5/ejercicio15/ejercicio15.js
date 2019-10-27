/**
 * Ejercicio 15
 * 
 * @author Pablo
 */
{
    let muestraInformacion = function(mensaje) {
        info.innerHTML = "<h1>" + mensaje[0] + "</h1>";
        for (let i = 1; i < mensaje.length; i++) {
            info.innerHTML += "<p>" + mensaje[i] + "</p>";
        }
    }
    
    let capturarEventos = function(evento) {
        switch (evento.type) {
            case "mousemove":
                info.style.backgroundColor = "white";
                muestraInformacion(["Ratón",
                    "Navegador [" + evento.clientX + ", " + evento.clientY + "]",
                    "Página [" + evento.pageX + ", " + evento.pageY + "]"]);
                break;
            case "keypress":
                info.style.backgroundColor = "blue";
                muestraInformacion(["Teclado",
                    "Carácter [" + String.fromCharCode(evento.charCode) + "]",
                    "Código [" + evento.charCode + "]"]);
                break;
            case "click":
                info.style.backgroundColor = "yellow";
                break;
        }
    }
    
    let init = function () {
        info = document.getElementById("info");
        document.onmousemove = capturarEventos;
        document.onkeypress = capturarEventos;
        document.onclick = capturarEventos;
    }

    window.addEventListener("DOMContentLoaded", init);
}
