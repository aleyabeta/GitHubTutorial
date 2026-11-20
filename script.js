
document.addEventListener("DOMContentLoaded", () => {

    // Menú de navegación para dispositivos móviles
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");

    menuBtn.addEventListener("click", () => {
        const abierto = navLinks.classList.toggle("active");

        menuBtn.setAttribute("aria-expanded", abierto);
        menuBtn.setAttribute(
            "aria-label",
            abierto ? "Cerrar menú" : "Abrir menú"
        );
        menuBtn.textContent = abierto ? "✕" : "☰";
    });

    // Cerrar el menú al seleccionar una sección
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Abrir menú");
            menuBtn.textContent = "☰";
        });
    });

    // Copiar comandos al portapapeles
    const copyButtons = document.querySelectorAll(".copy-btn");

    copyButtons.forEach(button => {
        button.addEventListener("click", async () => {
            const comando = button.dataset.command;

            try {
                await navigator.clipboard.writeText(comando);

                button.textContent = "¡Copiado!";

                setTimeout(() => {
                    button.textContent = "Copiar";
                }, 2000);

            } catch (error) {
                console.error("Error al copiar:", error);
                button.textContent = "Error al copiar";
            }
        });
    });

});
