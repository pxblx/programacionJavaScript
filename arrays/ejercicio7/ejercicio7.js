/**
 * 7.- Crea una función que elimine todos los undefined de un array.
 * 
 * @author Pablo
 */

{
    let eliminarUndefined = function (array) {
        array.forEach(function (element, index) {
            if (element === undefined) {
                array.splice(index, 1);
            }
        });
        return array;
    }

    console.log(eliminarUndefined(["Hola", undefined, 3, null, true, false]));
}
