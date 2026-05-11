fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contenedor-footer').innerHTML = data;
    });
// Función para enviar el mensaje personalizado
function enviarWhatsApp(event) {
    event.preventDefault();
    
    const telefono = "521234567890"; // <-- SUSTITUYE CON TU NÚMERO (Código de país + número)
    const mensaje = encodeURIComponent("¡Hola! Me gustariapedir mas informacion sobre las invitación! ✨");
    
    const url = `https://wa.me/${telefono}?text=${mensaje}`;
    
    // Abrir en pestaña nueva
    window.open(url, '_blank');
}
