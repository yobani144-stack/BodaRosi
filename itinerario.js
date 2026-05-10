// En tu archivo JS
fetch('itinerario.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('contenedor-itinerario').innerHTML = data;
        if (typeof AOS !== 'undefined') AOS.refresh();
    });
