<template>
    <div>
      <!-- Introducción -->
      <section id="introduccion" class="section">
        <div class="container">
          <h2>Importancia del cuidado de la salud mental</h2>
          <div class="row align-items-center">
            <div class="col-md-4 text-center">
              <img src="/Imagenes/salud.png" class="img-fluid" alt="Salud Mental" style="max-width: 200px;" />
            </div>
            <div class="col-md-8">
              <p>
                La salud mental es fundamental para llevar una vida equilibrada, satisfactoria y productiva.
                Cuidarla no solo mejora nuestro bienestar emocional, sino que también influye en nuestra salud
                física, nuestras relaciones y nuestro rendimiento diario.
              </p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Consejo 1 -->
      <section id="consejos" class="section">
        <div class="container">
          <h2>Consejos para disminuir el estrés</h2>
  
          <div class="d-flex flex-wrap align-items-center mb-5">
            <div class="col-md-6 pe-4">
              <h4>Establece tus prioridades</h4>
              <p>Aprende a reconocer lo más importante y organiza tu tiempo en función de tus objetivos. Evita la multitarea excesiva.</p>
            </div>
            <div class="col-md-6 text-center">
              <img src="/Imagenes/Prioridades.png" class="img-fluid" alt="Prioridades" style="max-width: 250px;" />
            </div>
          </div>
  
          <!-- Consejo 2 -->
          <div class="d-flex flex-wrap align-items-center mb-5 flex-row-reverse">
            <div class="col-md-6 ps-4">
              <h4>Realizar ejercicio</h4>
              <p>Hacer ejercicio regularmente reduce el estrés, mejora tu estado de ánimo y fortalece tu cuerpo. Basta con una caminata diaria.</p>
            </div>
            <div class="col-md-6 text-center">
              <img src="/Imagenes/ejercicio.png" class="img-fluid" alt="Ejercicio" style="max-width: 250px;" />
            </div>
          </div>
  
          <!-- Consejo 3 -->
          <div class="d-flex flex-wrap align-items-center">
            <div class="col-md-6 pe-4">
              <h4>Aprende a organizarte</h4>
              <p>No hay una sola manera de convertirte en una persona más organizada...</p>
              <ul>
                <li>Empieza por identificar los puntos problemáticos.</li>
                <li>No intentes cambiar todo a la vez. Abordar los problemas uno a uno te ayudará a mantener el enfoque y evitar abrumarte.</li>
                <li>Los sistemas no tienen que ser perfectos, solo tienen que funcionar. Cuanto más sencilla sea una estrategia, más probable será que la lleves a cabo.</li>
              </ul>
            </div>
            <div class="col-md-6 text-center">
              <img src="/Imagenes/organizate.png" class="img-fluid" alt="Organízate" style="max-width: 250px;" />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Metas -->
      <section id="metas" class="section">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center mb-5">
            <div class="col-md-6 pe-4">
              <h2>Establecer metas realistas</h2>
              <p>
                Establecer objetivos alcanzables te permite mantener la motivación y evitar frustraciones...
              </p>
            </div>
            <div class="col-md-6 text-center">
              <img src="/Imagenes/metas.png" class="img-fluid" alt="Metas realistas" style="max-width: 250px;" />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Ansiedad -->
      <section id="ansiedad" class="section bg-light">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center mb-5 flex-row-reverse">
            <div class="col-md-6 ps-4">
              <h2>Manejar tu ansiedad</h2>
              <p>
                La ansiedad puede ser una señal de que algo necesita atención en tu vida. Aprende técnicas de respiración...
              </p>
            </div>
            <div class="col-md-6 text-center">
              <img src="/Imagenes/ansiedad.png" class="img-fluid" alt="Manejar la ansiedad" style="max-width: 250px;" />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Procrastinar -->
      <section id="procrastinar" class="section">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center mb-5">
            <div class="col-md-6 pe-4">
              <h2>Dejar de procrastinar</h2>
              <p>
                La procrastinación no es solo una falta de voluntad, a menudo refleja miedos o falta de claridad...
              </p>
            </div>
            <div class="col-md-6 text-center">
              <img src="/Imagenes/procrastinar.png" class="img-fluid" alt="Procrastinación" style="max-width: 250px;" />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Relaciones -->
      <section id="relaciones" class="section bg-light">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center mb-5 flex-row-reverse">
            <div class="col-md-6 ps-4">
              <h2>Mejora tus relaciones</h2>
              <p>
                Las relaciones saludables son clave para el bienestar emocional...
              </p>
            </div>
            <div class="col-md-6 text-center">
              <img src="/Imagenes/relaciones.jpg" class="img-fluid" alt="Relaciones" style="max-width: 250px;" />
            </div>
          </div>
        </div>
      </section>
  
      <!-- Autoconocimiento -->
      <section id="autoconocimiento" class="section">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center mb-5">
            <div class="col-md-6 pe-4">
              <h2>Autoconocimiento</h2>
              <p>
                Conocerte a ti mismo es el primer paso hacia el cambio. Reflexiona sobre tus emociones, creencias y patrones de comportamiento...
              </p>
            </div>
            <div class="col-md-6 text-center">
              <img src="/Imagenes/autoconocimiento.jpg" class="img-fluid" alt="Autoconocimiento" style="max-width: 250px;" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Consejos'
  }
  </script>
  
  <style scoped>
  .section {
    padding: 2rem 0;
  }
  </style>
  