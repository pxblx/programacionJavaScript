/**
 * 9.- Averigua qué método es el más eficiente para manejarse con arrays. Compruébalo mediante 
 * performance.now() o similares.
 * - Introduce 100 elementos en un array mediante push(), unshift(), directamente, fijando tamaño 
 * en new Array...
 * - Eliminar 100 elementos en un array mediante pop(), shift(), directamente, fijando tamaño...
 * 
 * @author Pablo
 */

{
    let elementos;
    let t0;
    let t1;

    t0 = performance.now();
    elementos = [];
    for (i = 0; i < 1000; i++) {
        elementos.push(i);
    }
    t1 = performance.now();
    console.log("Con push, en añadir tarda " + (t1 - t0) + " milisegundos.");

    t0 = performance.now();
    for (i = 0; i < 1000; i++) {
        elementos.pop();
    }
    t1 = performance.now();
    console.log("Con pop, en borrar tarda " + (t1 - t0) + " milisegundos.");

    t0 = performance.now();
    elementos = [];
    for (i = 0; i < 1000; i++) {
        elementos.unshift(i);
    }
    t1 = performance.now();
    console.log("Con unshift, en añadir tarda " + (t1 - t0) + " milisegundos.");

    t0 = performance.now();
    for (i = 0; i < 1000; i++) {
        elementos.shift();
    }
    t1 = performance.now();
    console.log("Con shift, en borrar tarda " + (t1 - t0) + " milisegundos.");
}
