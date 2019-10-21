/**
 * Ejercicio 14
 * 
 * @author Pablo
 */

let muestraOculta = function(id) {
    let elemento = document.getElementById("contenidos_" + id);
    let enlace = document.getElementById("enlace_" + id);
    
    if (elemento.style.display == "" || elemento.style.display == "block") {
        elemento.style.display = "none";
        enlace.innerHTML = "Mostrar contenidos";
    } else {
        elemento.style.display = "block";
        enlace.innerHTML = "Ocultar contenidos";
    }
}

window.onload = function() {
    document.getElementById("enlace_1").addEventListener("click", function(){muestraOculta("1")});
    document.getElementById("enlace_2").addEventListener("click", function(){muestraOculta("2")});
    document.getElementById("enlace_3").addEventListener("click", function(){muestraOculta("3")});
}
