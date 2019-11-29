/**
 * Calculadora
 * 
 * @author Pablo
 */

{
    let init = function () {
        let fragment = document.createDocumentFragment();
        let div = document.createElement("div");
        div.style.border = "1px solid";
        div.style.display = "inline-block";
        div.style.padding = "10px";

        let display = document.createElement("input");
        display.setAttribute("type", "text");
        display.style.marginBottom = "10px";
        display.style.width = "100%";
        display.style.boxSizing = "border-box";
        div.appendChild(display);
        div.appendChild(document.createElement("br"));

        let botones = ["CE", "<-", "%", "+",
            "7", "8", "9", "-",
            "4", "5", "6", "x",
            "1", "2", "3", "/",
            "0", "+/-", ".", "="];
        let counter = 1;
        botones.forEach(texto => {
            let boton = document.createElement("button");
            boton.style.width = "50px";
            boton.style.height = "30px";
            boton.innerHTML = texto;
            div.appendChild(boton);
            if (counter == 4) {
                div.appendChild(document.createElement("br"));
                counter = 0;
            }
            counter++;
        });

        fragment.appendChild(div);
        document.body.appendChild(fragment);
    }
    
    addEventListener("DOMContentLoaded", init);
}
