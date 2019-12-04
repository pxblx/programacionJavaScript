/**
 * Calculadora mediante objeto literal
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
        // Operación actual
        operacionActual: "",

        // Obtener el resultado de la operación actual
        obtenerResultado: function (porcentaje) {
            this.op1 = parseFloat(this.op1);
            if (porcentaje) { // Si es porcentaje, el operador 1 pasa a ser el tanto por ciento
                this.op1 = (this.op1 * this.op2) / 100;
            }
            switch (this.operacionActual) {
                case "+": // Suma
                    this.op1 += this.op2;
                    break;
                case "-": // Resta
                    this.op1 = this.op2 - this.op1;
                    break;
                case "x": // Multiplicación
                    this.op1 *= this.op2;
                    break;
                case "/": // División
                    this.op1 = this.op2 / this.op1;
                    break;
            }
            calculadora.refrescarDisplay();
            this.op2 = parseFloat(this.op1);
            this.op1 = 0;
        },

        // Hacer operación
        hacerOperacion: function (operacion) {
            if (this.op1 == 0) {
                this.op1 = parseFloat(document.getElementsByTagName("input")[0].value);
            }
            this.op2 = parseFloat(this.op1);
            this.op1 = 0;
            this.operacionActual = operacion;
        },

        // Refrescar display
        refrescarDisplay: function () {
            document.getElementsByTagName("input")[0].value = this.op1;
        },

        // Obtener listeners para los botones
        getListener: function (boton) {
            switch (boton) {
                case "CE": // Limpiar
                    return () => {
                        this.op1 = 0;
                        this.op2 = 0;
                        calculadora.refrescarDisplay();
                    }
                case "&larr;": // Borrar
                    return () => {
                        if (this.op1.length != 1) {
                            this.op1 = this.op1.substring(0, this.op1.length - 1);
                        } else {
                            this.op1 = 0;
                        }
                        calculadora.refrescarDisplay();
                    }
                case "%": // Porcentaje
                    return () => {
                        calculadora.obtenerResultado(true);
                    }
                case "+": // Suma
                case "-": // Resta
                case "x": // Multiplicación
                case "/": // División
                    return () => {
                        calculadora.hacerOperacion(boton);
                    }
                case "+/-": // Cambio de signo
                    return () => {
                        this.op1 *= -1;
                        calculadora.refrescarDisplay();
                    }
                case ".": // Punto decimal
                    return () => {
                        if (this.op1 == 0) {
                            this.op1 = "0.";
                        } else if (this.op1.toString().indexOf(".") == -1) {
                            this.op1 += ".";
                        }
                        calculadora.refrescarDisplay();
                    }
                case "=": // Igual
                    return () => {
                        calculadora.obtenerResultado(false);
                    }
                default: // Números
                    return () => {
                        if (this.op1 == 0 && this.op1 !== "0." || this.op1 == "0") {
                            this.op1 = boton;
                        } else {
                            this.op1 += boton;
                        }
                        calculadora.refrescarDisplay();
                    }
            }
        },

        // Generar y mostrar la calculadora
        mostrarCalculadora: function () {
            let fragment = document.createDocumentFragment();

            // Elemento div contenedor
            let div = document.createElement("div");
            div.style.border = "1px solid";
            div.style.display = "inline-block";
            div.style.padding = "10px";
            div.style.backgroundColor = "#f6f9fc";

            // Display
            let display = document.createElement("input");
            display.setAttribute("type", "text");
            display.setAttribute("readonly", "readonly");
            display.style.marginBottom = "10px";
            display.style.width = "100%";
            display.style.boxSizing = "border-box";
            display.style.textAlign = "right";
            display.value = "0";
            div.appendChild(display);
            div.appendChild(document.createElement("br"));

            // Botones
            let botones = ["CE", "&larr;", "%", "+",
                "7", "8", "9", "-",
                "4", "5", "6", "x",
                "1", "2", "3", "/",
                "0", "+/-", ".", "="];
            let counter = 1;
            botones.forEach(boton => {
                let button = document.createElement("button");
                button.style.width = "50px";
                button.style.height = "30px";
                button.innerHTML = boton;
                button.addEventListener("click", calculadora.getListener(boton));
                div.appendChild(button);
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

    addEventListener("DOMContentLoaded", function () {
        document.body.appendChild(calculadora.mostrarCalculadora());
    });
}
