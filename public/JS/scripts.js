// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    // Aquí puedes agregar funciones de interactividad futuras si lo deseas
  
    console.log("Página cargada correctamente");
  
    // Ejemplo: destacar sección al hacer scroll (puedes eliminar si no lo usas)
    // window.addEventListener('scroll', () => {
    //   // lógica para animar o detectar secciones visibles
    // });
  });
  

function navigateToSection(sectionId) {
    // Seleccionamos el elemento de la sección a la que queremos desplazarnos
    var section = document.getElementById(sectionId);

    // Si la sección existe, desplazamos suavemente hasta ella
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

window.onload = function() {
    // Verificar si hay un hash en la URL
    if (window.location.hash) {
        // Desplazarse suavemente a la sección
        document.querySelector(window.location.hash).scrollIntoView({ behavior: 'smooth' });
    }
}





  
