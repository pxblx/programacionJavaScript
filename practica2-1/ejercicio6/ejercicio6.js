/**
 * Ejercicio 6
 * 
 * @author Pablo
 */
{
    const LETRAS = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T"];
    const pattern = new RegExp('^([0-9]{8})([A-Z])$');
    let dni = prompt("Introduce tu DNI");
    let numero = pattern.exec(dni)[1];

    if (numero < 0 || numero > 99999999) {
        alert("DNI no valido");
    } else {
        if (LETRAS[numero % 23] === pattern.exec(dni)[2]) {
            alert("DNI válido");
        } else {
            alert("DNI no válido");
        }
    }
}
