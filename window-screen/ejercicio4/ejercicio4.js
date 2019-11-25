/**
 * Ejercicio 4
 * 
 * @author Pablo
 */

{
    let init = function () {
        let date = new Date();
        let p = document.createElement("p");
        document.body.appendChild(p);
        setInterval(() => {
            date = new Date();
            p.innerHTML = (date.getHours() + ":" + date.getMinutes().toString().padStart(2, "0") + ":" + date.getSeconds().toString().padStart(2, "0"));
        }, 100);
    }

    addEventListener("DOMContentLoaded", init);
}
