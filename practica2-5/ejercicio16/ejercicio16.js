/**
 * Ejercicio 16
 * 
 * @author Pablo
 */
{
    let elementoInfo;

    /**
     * Obtener la información sobre el evento click y mostrarla
     * 
     * @param {Event} evento
     */
    let informacion = function (evento) {
        console.log(evento);
        let [tamanoX, tamanoY] = tamanoVentanaNavegador();
        let clickX = evento.clientX;
        let clickY = evento.clientY;
        muestraInformacion([evento.type,
            (clickX > tamanoX / 2 ? "derecha" : "izquierda") + " [" + clickX + "]",
            (clickY > tamanoY / 2 ? "abajo" : "arriba") + " [" + clickY + "]"]);
    }

    /**
     * Mostrar la información del evento
     * 
     * @param {string} mensaje
     */
    let muestraInformacion = function (mensaje) {
        let texto = "<h1>" + mensaje[0] + "</h1>";
        for (let i = 1; i < mensaje.length; i++) {
            texto += "<p>" + mensaje[i] + "</p>";
        }
        elementoInfo.innerHTML = texto;
    }

    /**
     * Obtener el tamaño de la ventana del navegador
     * 
     * @returns {Array} ancho y alto del área de contenido de la ventana (x, y)
     */
    let tamanoVentanaNavegador = function () {
        return [window.innerWidth, window.innerHeight];
    }

    /**
     * Inicio
     */
    let init = function () {
        elementoInfo = document.getElementById("info");
        document.addEventListener("click", informacion);
    }

    document.addEventListener("DOMContentLoaded", init);
}
