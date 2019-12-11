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
function Gatito(nombre, nacimiento, raza, peso) {
    this.nombre = nombre.trim();
    this.nacimiento = nacimiento;
    this.raza = raza;
    this.peso = peso;
    this.estado = "Jugando";
}

/**
 * Devolver si el gatito está muerto o no
 * 
 * @returns true o false
 */
Gatito.prototype.estaMuerto = function () {
    if (this.peso < 1 || this.peso > 9) {
        this.estado = "Muerto";
    }
    return this.peso < 1 || this.peso > 9;
}

/**
 * Jugar (decrementar peso)
 */
Gatito.prototype.jugar = function () {
    if (this.estaMuerto()) {return}
    this.peso--;
    this.estado = "Jugando";
}

/**
 * Comer (incrementar peso)
 */
Gatito.prototype.comer = function () {
    if (this.estaMuerto()) {return}
    this.peso++;
    this.estado = "Comiendo";
}
