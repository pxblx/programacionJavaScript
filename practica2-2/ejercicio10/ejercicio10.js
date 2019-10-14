/**
 * Ejercicio 10
 * 
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
 * es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo
 * complejo: "La ruta nos aporto otro paso natural".
 * 
 * @author Pablo
 */

function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, "");
    if (cadena === cadena.split("").reverse().join("")) {
        console.log("Es un palíndromo");
    } else {
        console.log("No es un palíndromo");
    }
}

esPalindromo(prompt("Introduce una cadena"));
