/**
 * Ejercicio 8
 * 
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
 * como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla
 * el resultado devuelto por la función.
 * 
 * @author Pablo
 */
{
    let esPar = function (numero) {
        return (numero % 2 === 0) ? "Es par" : "Es impar";
    }

    console.log(esPar(prompt("Introduce un número:")));
}
