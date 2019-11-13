/**
 * 6.- Crea una función que devuelva un array con cada uno de los argumentos. En caso de que alguno 
 * de sus argumentos sea un array, que introduzca sus elementos uno a uno.
 * 
 * @author Pablo
 */

{
    let generarArray = function () {
        let array = [];
        for (let i = 0; i < arguments.length; i++) {
            let elemento = arguments[i];
            if (Array.isArray(elemento)) {
                elemento.forEach(item => {
                    array.push(item);
                });
            } else {
                array.push(elemento);
            }
        }
        return array;
    }
    
    console.log(generarArray("Hola", undefined, 3, ["Elemento1", "Elemento2"], null, true));
}
