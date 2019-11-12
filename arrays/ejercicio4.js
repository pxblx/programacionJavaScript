/**
 * 4.- Crea una función que cree un array de la dimensión indicada, cuyo contenido sean los números 
 * naturales comenzando desde 0.
 * 
 * @author Pablo
 */

let numerosNaturales = function (n) {
    let arrayNumeros = [];
    for (let i = 0; i < n; i++) {
        arrayNumeros.push(i);
    }
    return arrayNumeros;
}

console.log(numerosNaturales(5));
