/**
 * Ejercicio 15
 * 
 * @author Pablo
 */

function muestraInformacion(mensaje) {
	document.getElementById("info").innerHTML = "<h1>" + mensaje[0] + "</h1>";
	for (let i = 1; i < mensaje.length; i++) {
		document.getElementById("info").innerHTML += "<p>" + mensaje[i] + "</p>";
	}
}

function capturarEventos(evento) {
    let info = document.getElementById("info");
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

window.onload = function() {
    document.onmousemove = capturarEventos;
    document.onkeypress = capturarEventos;
    document.onclick = capturarEventos;
}
