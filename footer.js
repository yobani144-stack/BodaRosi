function pedirInformes(event) {
    // Evitamos que el enlace intente recargar la página
    event.preventDefault();
    
    // Configuración de tu número y mensaje
    const miTelefono = "527291255411"; // <-- PON AQUÍ TU NÚMERO (Código país + número)
    const textoMensaje = "¡Hola! Vi la invitación digital y me encantó su trabajo. ✨ Me gustaría recibir más información y conocer sus paquetes y precios. ¡Muchas gracias!";
    
    // Codificamos el texto para que WhatsApp lo entienda
    const mensajeCodificado = encodeURIComponent(textoMensaje);
    
    // Creamos la URL final
    const urlWhatsapp = `https://wa.me/${miTelefono}?text=${mensajeCodificado}`;
    
    // Abrimos en una nueva pestaña
    window.open(urlWhatsapp, '_blank');
}
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contenedor-footer').innerHTML = data;
    });
