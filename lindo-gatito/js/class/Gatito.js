/**
 * Gatito
 * Clase Gatito
 * 
 * @author Pablo
 */

class Gatito {
    /**
     * Constructor
     * 
     * @param {String} nombre Nombre del gatito
     * @param {Date} nacimiento Fecha de nacimiento del gatito
     * @param {String} raza Raza del gatito
     * @param {Number} peso Peso del gatito
     * @param {String} estado Estado del gatito
     */
    constructor(nombre, nacimiento, raza, peso, estado) {
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
    estaVivo () {
        return this.peso > 0 && this.peso < 10;
    }

    /**
     * Jugar (decrementar peso)
     */
    jugar () {
        if (this.estaVivo) {
            this.peso--;
        }
    }

    /**
     * Comer (incrementar peso)
     */
    comer () {
        if (this.estaVivo) {
            this.peso++;
        }
    }
}
