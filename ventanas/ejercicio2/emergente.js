/**
 * Ventana emergente
 * 
 * @author Pablo
 */

{
    let init = function () {
        document.getElementById("close").addEventListener("click", function () {
            close();
        });
    }

    window.addEventListener("DOMContentLoaded", init);
}
