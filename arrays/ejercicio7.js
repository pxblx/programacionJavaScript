/**
 * 7.- Crea una función que elimine todos los undefined de un array.
 * 
 * @author Pablo
 */

let eliminarUndefined = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === undefined) {
            array.splice(i, 1);
        }
    }
    return array;
}

console.log(eliminarUndefined(["Hola", undefined, 3, null, true]));
