/**
 * Ejercicio 17
 * 
 * @author Pablo
 */
{
    let elementoTexto;
    let elementoInfo;
    let max = 10;

    /**
     * Limitar el número de caracteres del elemento
     */
    let limita = function () {
        if (elementoTexto.value.length >= max) {
                return false;
        }
        actualizarInfo();
    }

    /**
     * Actualizar información
     */
    let actualizarInfo = function () {
        elementoInfo.innerHTML = max - elementoTexto.value.length + "/" + max + " caracteres restantes";
    }

    /**
     * Inicio
     */
    let init = function () {
        elementoTexto = document.getElementById("texto");
        elementoInfo = document.getElementById("info");
        elementoTexto.onkeypress = limita();
        actualizarInfo();
    }

    document.addEventListener("DOMContentLoaded", init);
}
