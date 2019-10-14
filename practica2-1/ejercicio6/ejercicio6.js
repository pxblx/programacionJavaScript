/**
 * Ejercicio 6
 * 
 * @author Pablo
 */

let dni = prompt("Introduce tu DNI");
let numero = dni.substring(0, 8);
let letra = dni.substring(8, 9);
const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];

if (numero < 0 || numero > 99999999) {
    alert("DNI no valido");
} else {
    if (letras[numero % 23] === letra) {
        alert("DNI válido");
    } else {
        alert("DNI no válido");
    }
}
