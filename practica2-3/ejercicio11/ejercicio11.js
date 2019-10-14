/**
 * Ejercicio 11
 * 
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la
 * siguiente información:
 * - Número de enlaces de la página
 * - Dirección a la que enlaza el penúltimo enlace
 * - Numero de enlaces que enlazan a http://prueba
 * - Número de enlaces del tercer párrafo
 * 
 * @author Pablo
 */

// Array de enlaces
let enlaces = document.links;

// Número de enlaces de la página
console.log("Hay " + enlaces.length + " enlaces");

// Dirección a la que enlaza el penúltimo enlace
console.log("El penúltimo enlace apunta a " + enlaces[enlaces.length - 2].href);

// Número de enlaces que enlazan a http://prueba
let contador = 0;
for (let i = 0; i < enlaces.length; i++) {
    if (enlaces[i].href === "http://prueba/") {
        contador++;
    }
}
console.log("Hay " + contador + " enlaces que enlazan a http://prueba/");

// Número de enlaces del primer párrafo
console.log("En el tercer párrafo hay " + document.getElementsByTagName("p")[2].getElementsByTagName("a").length + " enlaces");
