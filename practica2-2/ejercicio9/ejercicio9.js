/**
 * Ejercicio 9
 * 
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como
 * argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está
 * formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 * 
 * @author Pablo
 */

{
    let info = function (cadena) {
        if (cadena.toUpperCase() === cadena) {
            console.log("La cadena está en mayúsculas");
        } else if (cadena.toLowerCase() === cadena) {
            console.log("La cadena está en minúsculas");
        } else {
            console.log("La cadena está en mayúsculas y minúsculas");
        }
    }

    info(prompt("Introduce una cadena"));
}
