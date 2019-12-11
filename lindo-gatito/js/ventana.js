/**
 * Gatito
 * Ventana
 * 
 * @author Pablo
 */

{
    // Crear objeto Gatito
    let gatito = new Gatito(sessionStorage.getItem("nombre"),
        sessionStorage.getItem("fecha"),
        sessionStorage.getItem("raza"),
        sessionStorage.getItem("peso"));
    
    // Actualizar información
    let update = () => {
        let imagen = document.getElementById("imagen");
        switch (gatito.estado) {
            case "Comiendo":
                imagen.setAttribute("src", "img/comiendo.jpg");
                break;
            case "Muerto":
                imagen.setAttribute("src", "img/muerto.jpg");
                document.getElementById("bJugar").setAttribute("disabled", "disabled");
                document.getElementById("bComer").setAttribute("disabled", "disabled");
                break;
            default:
                imagen.setAttribute("src", "img/jugando.jpg");
                break;
        }
        document.getElementById("peso").innerHTML = "<b>Peso: </b>" + gatito.peso + " kg";
        document.getElementById("estado").innerHTML = "<b>Estado: </b>" + gatito.estado;
    }

    // Cargar contenido
    addEventListener("DOMContentLoaded", () => {
        document.title = "Gatito " + gatito.nombre;
        
        let fragment = document.createDocumentFragment();

        // Cabecera
        let element = document.createElement("h1");
        element.innerHTML = gatito.nombre;
        fragment.appendChild(element);
        fragment.appendChild(document.createElement("hr"));
        fragment.appendChild(document.createElement("br"));

        // Imagen
        element = document.createElement("img");
        element.setAttribute("id", "imagen");
        element.style.width = "300px";
        element.style.height = "200px";
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Fecha de nacimiento
        element = document.createElement("p");
        element.innerHTML = "<b>Fecha de nacimiento: </b>" + gatito.nacimiento;
        element.style.margin = "0";
        fragment.appendChild(element);

        // Raza
        element = document.createElement("p");
        element.innerHTML = "<b>Raza: </b>" + gatito.raza;
        element.style.margin = "0";
        fragment.appendChild(element);

        // Peso
        element = document.createElement("p");
        element.setAttribute("id", "peso");
        element.style.margin = "0";
        fragment.appendChild(element);

        // Estado
        element = document.createElement("p");
        element.setAttribute("id", "estado");
        element.style.margin = "0";
        fragment.appendChild(element);

        // Edad
        element = document.createElement("p");
        element.setAttribute("id", "edad");
        element.style.display = "none";
        element.style.margin = "0";
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));

        // Botón para comer
        element = document.createElement("button");
        element.setAttribute("id", "bComer");
        element.innerHTML = "Comer";
        element.addEventListener("click", () => {
            gatito.comer();
            update();
        });
        fragment.appendChild(element);

        // Botón para jugar
        element = document.createElement("button");
        element.setAttribute("id", "bJugar");
        element.innerHTML = "Jugar";
        element.addEventListener("click", () => {
            gatito.jugar();
            update();
        });
        fragment.appendChild(element);

        // Botón para ver edad
        element = document.createElement("button");
        element.setAttribute("id", "bEdad");
        element.innerHTML = "Ver edad";
        element.addEventListener("click", () => {
            let edad = document.getElementById("edad");
            edad.innerHTML = "<b>Edad: </b>" + ((new Date().getFullYear()) - (new Date(gatito.nacimiento).getFullYear()));
            edad.style.display = "block";
            document.getElementById("bEdad").setAttribute("disabled", "disabled");
        });
        fragment.appendChild(element);

        document.body.appendChild(fragment);

        update();
    });
}
