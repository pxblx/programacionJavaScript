/**
 * Gatito
 * main
 * 
 * @author Pablo
 */

{
    addEventListener("DOMContentLoaded", function () {
        let fragment = document.createDocumentFragment();

        // Label para el nombre
        let label = document.createElement("label");
        label.setAttribute("for", "nombre");
        label.style.marginRight = "5px";
        label.innerHTML = "Nombre:";
        fragment.appendChild(label);

        // Input para el nombre
        let element = document.createElement("input");
        element.setAttribute("type", "text");
        element.setAttribute("name", "nombre");
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Label para la raza
        label = document.createElement("label");
        label.setAttribute("for", "raza");
        label.style.marginRight = "5px";
        label.innerHTML = "Raza:";
        fragment.appendChild(label);

        // Select para la raza
        element = document.createElement("select");
        element.setAttribute("name", "raza");
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
        label = document.createElement("label");
        label.setAttribute("for", "peso");
        label.style.marginRight = "5px";
        label.innerHTML = "Peso:";
        fragment.appendChild(label);

        // Input para el peso
        element = document.createElement("input");
        element.setAttribute("type", "number");
        element.setAttribute("name", "peso");
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Label para la fecha de nacimiento
        label = document.createElement("label");
        label.setAttribute("for", "fecha");
        label.style.marginRight = "5px";
        label.innerHTML = "Fecha de nacimiento:";
        fragment.appendChild(label);

        // Input para la fecha de nacimiento
        element = document.createElement("input");
        element.setAttribute("type", "date");
        element.setAttribute("name", "fecha");
        fragment.appendChild(element);

        fragment.appendChild(document.createElement("br"));
        fragment.appendChild(document.createElement("br"));

        // Botón para crear el gatito
        element = document.createElement("button");
        element.setAttribute("name", "boton");
        element.innerHTML = "Crear gatito";
        element.addEventListener("click", function () {
            // ...
        });
        fragment.appendChild(element);

        document.body.appendChild(fragment);
    });
}
