/**
 * Ejercicio 13
 * 
 * Completar el código JavaScript proporcionado para que se añadan nuevos elementos a la lista cada
 * vez que se pulsa sobre el botón. Utilizar las funciones DOM para crear nuevos nodos y añadirlos a
 * la lista existente. Al igual que sucede en el ejercicio anterior, la acción de pinchar sobre un
 * botón forma parte de los "Eventos" de JavaScript que se ven en el siguiente capítulo. En este
 * ejercicio, sólo se debe saber que al pinchar sobre el botón, se ejecuta la función llamada anade().
 * 
 * @author Pablo
 */
{
    let init = function () {
        let contador = 1;
        document.getElementById("boton").addEventListener("click", function () {
            let nodo = document.createElement("li");
            nodo.appendChild(document.createTextNode("Nuevo elemento (" + contador + ")"));
            document.getElementById("lista").appendChild(nodo);
            contador++;
        });
    }

    window.addEventListener("DOMContentLoaded", init);
}
