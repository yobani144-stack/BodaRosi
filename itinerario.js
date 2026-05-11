// Ejemplo de contenido de tu archivo script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript cargado correctamente");
    
    // Aquí mueves todas tus funciones: fetch, AOS, Swiper, etc.
    cargarSecciones();
});

function cargarSecciones() {
    // Ejemplo de tus cargas fetch
    fetch('itinerario.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contenedor-itinerario').innerHTML = data;
        });
}
