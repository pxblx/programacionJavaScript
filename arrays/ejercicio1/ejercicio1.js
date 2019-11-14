/**
 * 1.- Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.
 * 
 * El método forEach recibe tres parámetros:
 * - El elemento actual que se procesa.
 * - El índice del elemento actual que se procesa (opcional).
 * - El array en el que forEach() está siendo aplicado.
 * 
 * @author Pablo
 */

{
    let coches = ["Mercedes", "Volvo", "Renault", "Ford", "Seat"];

    coches.forEach(coche => {
        console.log(coche);
    });
}
