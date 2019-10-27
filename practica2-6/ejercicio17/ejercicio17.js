/**
 * Ejercicio 17
 * 
 * @author Pablo
 */
{
    const LIMITE_CARACTERES = 5;
    let elementoTexto;
    let elementoInfo;

    /**
     * Limitar el número de caracteres
     */
    let limitar = function (evento) {
        switch (evento.key) {
            case 'ArrowLeft':
            case 'ArrowRight':
            case 'ArrowUp':
            case 'ArrowDown':
            case 'Backspace':
            case 'Delete':
            return;
        }
        if (elementoTexto.value.length >= LIMITE_CARACTERES) {
            evento.preventDefault();
        }
    }

    /**
     * Actualizar información
     */
    let actualizarInfo = function () {
        let restan = LIMITE_CARACTERES - elementoTexto.value.length;
        elementoInfo.innerHTML = restan ? `Caracteres restantes: <b>${restan}</b>` : `Has llegado al límite de <b>${LIMITE_CARACTERES}</b> caracteres`;
    }

    /**
     * Inicio
     */
    let init = function () {
        elementoTexto = document.getElementById("texto");
        elementoInfo = document.getElementById("info");
        elementoTexto.addEventListener("keydown", limitar);
        elementoTexto.addEventListener("keyup", actualizarInfo);
        actualizarInfo();
    }

    document.addEventListener("DOMContentLoaded", init);
}
