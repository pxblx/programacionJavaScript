/**
 * 5.- Crea una función que devuelva un array con cada uno de los argumentos.
 * 
 * @author Pablo
 */

{
    let generarArray = function () {
        let array = [];
        for (let i = 0; i < arguments.length; i++) {
            array.push(arguments[i]);
        }
        return array;
    }
    
    console.log(generarArray("Hola", undefined, 3, null, true));
}
