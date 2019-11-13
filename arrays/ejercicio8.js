/**
 * 8.- Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos 
 * arrays: Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y 
 * Array.prototype.filter().
 * 
 * - filter() te permite crear un nuevo array con elementos del array inicial que pasen un 
 * determinado test.
 * - some() verifica si alguno de los valores del array pasa un determinado test.
 * - every() verifica si todos los valores del array pasan en un determinado test.
 * - forEach() llama y ejecuta una función una vez por cada elemento del array.
 * 
 * @author Pablo
 */

{
    let coches = ["Mercedes", "Volvo", "Renault", "Ford", "Seat"];

    // Devuelve los valores (cadenas en este caso) que tengan 4 caracteres
    console.log(coches.filter(function (elemento) {
        return elemento.length == 4;
    }));

    // Verifica si existe alguna cadena en el array que tenga 4 caracteres
    console.log(coches.some(function (elemento) {
        return elemento.length == 8;
    }));

    // Verifica si todos los elementos del array son cadenas
    console.log(coches.every(function (elemento) {
        return typeof elemento == "string";
    }));

    // Itera el array para mostrar todos sus elementos
    console.log(coches.forEach(marca => {
        console.log(marca);
    }));
}
