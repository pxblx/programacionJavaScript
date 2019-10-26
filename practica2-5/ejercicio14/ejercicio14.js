/**
 * Ejercicio 14
 * 
 * @author Pablo
 */
{
    let muestraOculta = function (id) {
        let contenidos = document.getElementById("contenidos_" + id);
        if (contenidos.style.display == "" || contenidos.style.display == "block") {
            contenidos.style.display = "none";
            this.innerHTML = "Mostrar contenidos";
        } else {
            contenidos.style.display = "block";
            this.innerHTML = "Ocultar contenidos";
        }
    }

    let init = function () {
        document.getElementById("enlace_1").addEventListener("click", function () { muestraOculta("1") });
        document.getElementById("enlace_2").addEventListener("click", function () { muestraOculta("2") });
        document.getElementById("enlace_3").addEventListener("click", function () { muestraOculta("3") });
    }

    window.addEventListener("DOMContentLoaded", init);
}
