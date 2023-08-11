// Escuchamos los clics en los enlaces de la barra de navegación
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }
});

// Función para hacer scroll suave hacia las secciones
function smoothScroll(event) {
    event.preventDefault(); // Evitamos el comportamiento predeterminado del enlace

    const targetId = this.getAttribute('href'); // Obtenemos el atributo 'href' que contiene el ID de la sección a la que queremos ir
    const targetElement = document.querySelector(targetId); // Obtenemos el elemento de la sección

    if (targetElement) {
        // Hacemos scroll suave utilizando el método scrollIntoView
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');

    for (const link of navLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evitamos el comportamiento predeterminado del enlace

            const target = this.getAttribute('data-target');
            const sections = document.querySelectorAll('section');

            for (const section of sections) {
                if (section.id === target) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            }
        });
    }
});