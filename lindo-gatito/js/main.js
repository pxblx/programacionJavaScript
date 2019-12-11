/**
 * Gatito
 * main
 * 
 * @author Pablo
 */

{
    addEventListener("DOMContentLoaded", () => {
        document.title = "Gatito";
        
        let fragment = document.createDocumentFragment();

        // Cabecera
        let element = document.createElement("h1");
        element.innerHTML = "Gatito";
        fragment.appendChild(element);
        fragment.appendChild(document.createElement("hr"));
        fragment.appendChild(document.createElement("br"));

        // Label para el nombre
        element = document.createElement("label");
        element.setAttribute("for", "nombre");
        element.style.marginRight = "5px";
        element.innerHTML = "Nombre:";
        fragment.appendChild(element);

        // Input para el nombre
        element = document.createElement("input");
        element.setAttribute("type", "text");
        element.setAttribute("id", "nombre");
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Label para la raza
        element = document.createElement("label");
        element.setAttribute("for", "raza");
        element.style.marginRight = "5px";
        element.innerHTML = "Raza:";
        fragment.appendChild(element);

        // Select para la raza
        element = document.createElement("select");
        element.setAttribute("id", "raza");
        ["Siamés", "Persa", "Sphynx"].forEach(raza => {
            let option = document.createElement("option");
            option.setAttribute("value", raza);
            option.innerHTML = raza;
            element.appendChild(option);
        });
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Label para el peso
        element = document.createElement("label");
        element.setAttribute("for", "peso");
        element.style.marginRight = "5px";
        element.innerHTML = "Peso:";
        fragment.appendChild(element);

        // Input para el peso
        element = document.createElement("input");
        element.setAttribute("type", "number");
        element.setAttribute("id", "peso");
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Label para la fecha de nacimiento
        element = document.createElement("label");
        element.setAttribute("for", "fecha");
        element.style.marginRight = "5px";
        element.innerHTML = "Fecha de nacimiento:";
        fragment.appendChild(element);

        // Input para la fecha de nacimiento
        element = document.createElement("input");
        element.setAttribute("type", "date");
        element.setAttribute("id", "fecha");
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Botón para crear el gatito
        element = document.createElement("button");
        element.setAttribute("id", "crear");
        element.innerHTML = "Crear gatito";
        element.addEventListener("click", () => {
            // ...
        });
        fragment.appendChild(element);

        document.body.appendChild(fragment);
    });
}
