/**
 * Ejercicio 4
 * 
 * @author Pablo
 */

let valores = [true, 5, false, "hola", "adios", 2];

if (valores[3] > valores[4]) {
    console.log(valores[3]);
} else if (valores[3] < valores[4]) {
    console.log(valores[4]);
} else {
    console.log("Las dos son iguales");
}

console.log(valores[0] && valores[2]);
console.log(!(valores[0] && valores[2]));

console.log(valores[1] + valores[5]);
console.log(valores[1] - valores[5]);
console.log(valores[1] * valores[5]);
console.log(valores[1] / valores[5]);
console.log(valores[1] % valores[5]);
