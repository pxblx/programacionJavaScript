/**
 * Calculadora
 * 
 * @author Pablo
 */

{
    // Calculadora
    let calculadora = {
        // Operador 1
        op1: 0,
        // Operador 2
        op2: 0,
        // Código de operación
        operacion: 0,

        // Listener para los números
        clickNumero: function (value) {
            if (this.op1 == 0 && this.op1 !== "0." || this.op1 == "0") {
                this.op1 = value;
            } else {
                this.op1 += value;
            }
            calculadora.refrescar();
        },

        // Listener para la coma
        clickComa: function () {
            if (this.op1 == 0) {
                this.op1 = "0.";
            } else if (this.op1.indexOf(".") == -1) {
                this.op1 += ".";
            }
            calculadora.refrescar();
        },

        // Listener para el clear
        clickClear: function () {
            this.op1 = 0;
            this.op2 = 0;
            calculadora.refrescar();
        },

        // Listener para el cambio de signo
        cambioSigno: function () {
            this.op1 *= -1;
            calculadora.refrescar();
        },

        // Listener para el borrar
        clickBorrar: function () {
            if (this.op1.length != 1) {
                this.op1 = this.op1.substring(0, this.op1.length - 1);
            } else {
                this.op1 = 0;
            }
            calculadora.refrescar();
        },

        // Listener para el igual
        clickIgual: function () {
            this.op1 = parseFloat(this.op1);
            switch (this.operacion) {
                case 1:
                    this.op1 += this.op2;
                break;
                case 2:
                    this.op1 = this.op2 - this.op1;
                break;
                case 3:
                    this.op1 *= this.op2;
                break;
                case 4:
                    this.op1 = this.op2 / this.op1;
                break;
            }
            calculadora.refrescar();
            this.op2 = parseFloat(this.op1);
            this.op1 = 0;
        },

        // Hacer operaciones
        operar: function (value) {
            if (this.op1 == 0) {
                this.op1 = parseFloat(document.getElementById("display").value);
            }
            this.op2 = parseFloat(this.op1);
            this.op1 = 0;
            this.operacion = value;
        },

        // Refrescar display
        refrescar: function () {
            document.getElementById("display").value = this.op1;
        },

        // Generar y mostrar la calculadora
        mostrarCalculadora: function () {
            let fragment = document.createDocumentFragment();
            let div = document.createElement("div");
            div.style.border = "1px solid";
            div.style.display = "inline-block";
            div.style.padding = "10px";

            let display = document.createElement("input");
            display.setAttribute("type", "text");
            display.setAttribute("readonly", "readonly");
            display.setAttribute("id", "display");
            display.style.marginBottom = "10px";
            display.style.width = "100%";
            display.style.boxSizing = "border-box";
            display.style.textAlign = "right";
            display.value = "0";
            div.appendChild(display);
            div.appendChild(document.createElement("br"));

            let botones = [["CE", 1], ["&larr;", 2], ["%", 3], ["+", 4],
                ["7", 0], ["8", 0], ["9", 0], ["-", 5],
                ["4", 0], ["5", 0], ["6", 0], ["x", 6],
                ["1", 0], ["2", 0], ["3", 0], ["/", 7],
                ["0", 0], ["+/-", 8], [".", 9], ["=", 10]];
            let counter = 1;
            botones.forEach(idBoton => {
                let boton = document.createElement("button");
                boton.style.width = "50px";
                boton.style.height = "30px";
                boton.innerHTML = idBoton[0];
                boton.addEventListener("click", function () {
                    switch (idBoton[1]) {
                        case 1:
                            calculadora.clickClear();
                            break;
                        case 2:
                            calculadora.clickBorrar();
                            break;
                        case 3:
                            // ...
                            break;
                        case 4:
                            calculadora.operar(1);
                            break;
                        case 5:
                            calculadora.operar(2);
                            break;
                        case 6:
                            calculadora.operar(3);
                            break;
                        case 7:
                            calculadora.operar(4);
                            break;
                        case 8:
                            calculadora.cambioSigno();
                            break;
                        case 9:
                            calculadora.clickComa();
                            break;
                        case 10:
                            calculadora.clickIgual();
                            break;
                        default:
                            calculadora.clickNumero(idBoton[0]);
                            break;
                    }
                });
                div.appendChild(boton);
                if (counter == 4) {
                    div.appendChild(document.createElement("br"));
                    counter = 0;
                }
                counter++;
            });

            fragment.appendChild(div);
            return fragment;
        }
    }

    // Función init
    let init = function () {
        document.body.appendChild(calculadora.mostrarCalculadora());
    }

    addEventListener("DOMContentLoaded", init);
}
