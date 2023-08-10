document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar ul li a");
    const menuCheckbox = document.getElementById("menu");
    
    links.forEach(link => {
        link.addEventListener("click", () => {
            menuCheckbox.checked = false;
        });
    });

    // Script para desplazamiento suave al hacer clic en enlaces de navegación
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});