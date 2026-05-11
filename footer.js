fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contenedor-footer').innerHTML = data;
    });
