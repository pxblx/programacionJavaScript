/**
 * Gatito
 * Clase Gatito
 * 
 * @author Pablo
 */

/**
 * Gatito
 * 
 * @param {String} nombre Nombre del gatito
 * @param {Date} nacimiento Fecha de nacimiento del gatito
 * @param {String} raza Raza del gatito
 * @param {Number} peso Peso del gatito
 * @param {String} estado Estado del gatito
 */
function Gatito(nombre, nacimiento, raza, peso, estado) {
    this.nombre = nombre;
    this.nacimiento = nacimiento;
    this.raza = raza;
    this.peso = peso;
    this.estado = estado;
}

/**
 * Devolver si el gatito está vivo o no
 * 
 * @returns true o false
 */
Gatito.prototype.estaVivo = function () {
    return this.peso > 0 && this.peso < 10;
}

/**
 * Jugar (decrementar peso)
 */
Gatito.prototype.jugar = function () {
    if (this.estaVivo) {
        this.peso--;
    }
}

/**
 * Comer (incrementar peso)
 */
Gatito.prototype.comer = function () {
    if (this.estaVivo) {
        this.peso++;
    }
}
