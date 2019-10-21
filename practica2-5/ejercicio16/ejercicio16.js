/**
 * Ejercicio 16
 * 
 * @author Pablo
 */

let informacion = function(elEvento) {
    let evento = elEvento || window.event;
    let tamano = tamanoVentanaNavegador();
    let horizontal = "";
    let vertical = "";

    if (evento.clientX > tamano[0] / 2) {
        horizontal = "derecha";
    } else {
        horizontal = "izquierda";
    }

    if (evento.clientY > tamano[1] / 2) {
        vertical = "abajo";
    } else {
        vertical = "arriba";
    }

	muestraInformacion(["Click en: ", vertical, horizontal]);
}

let muestraInformacion = function(mensaje) {
    let info = document.getElementById("info");
	info.innerHTML = "<h1>" + mensaje[0] + "</h1>";
	for (let i = 1; i < mensaje.length; i++) {
		info.innerHTML += "<p>" + mensaje[i] + "</p>";
	}
}

let tamanoVentanaNavegador = function() {
	return [window.innerWidth, window.innerHeight];
}

window.onload = function() {
    document.onclick = informacion;
}
