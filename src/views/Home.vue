<!-- src/views/Home.vue -->
<template>
    <div>
      <!-- Texto Introductorio -->
      <div class="intro-container text-center my-5">
        <h2 class="fw-bold"><br>Bienvenid@ a Psicolinces</h2>
        <p class="lead mt-3">
          En Psicolinces creemos que el bienestar emocional y mental es clave para una vida plena. Este espacio ha sido creado para ofrecerte herramientas, consejos y acompañamiento en tu camino hacia el autoconocimiento, la gestión emocional y el desarrollo personal.
        </p>
      </div>
  
      <!-- Carrusel -->
      <div id="carouselPsicolinces" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselPsicolinces" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselPsicolinces" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselPsicolinces" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/Imagenes/Carousel/bienvenido.png" class="d-block w-100" alt="Imagen 1" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Bienvenido a Psicolinces</h5>
              <p>Un espacio para cuidar tu salud mental</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/Imagenes/Carousel/Agenda.png" class="d-block w-100" alt="Imagen 2" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Agenda tu cita</h5>
              <p>Encuentra herramientas para tu bienestar emocional</p>
              <a href="/institucionales" class="btn-carousel">Citas</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/Imagenes/Carousel/autoexploracion.png" class="d-block w-100" alt="Imagen 3" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Autoconocimiento</h5>
              <p>Conócete mejor y crece cada día</p>
              <a href="/consejos" class="btn-carousel">Click aquí para más consejos</a>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselPsicolinces" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselPsicolinces" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Siguiente</span>
        </button>
      </div>
  
      <!-- Artículos -->
      <div class="container text-center mt-5">
        <h3 class="fw-bold">Algunos artículos de interés</h3>
        <p class="text-muted">Explora contenido que puede ayudarte a comprender mejor tu salud mental y emocional.</p>
      </div>
  
      <div class="container my-5">
        <div class="row g-4">
          <div class="col-md-4" v-for="(articulo, index) in articulos" :key="index">
            <div class="card articulo-card">
              <div class="card-img-overlay overlay-content">
                <h5 class="card-title">{{ articulo.titulo }}</h5>
                <p class="card-text">{{ articulo.descripcion }}</p>
                <a :href="articulo.link" class="btn btn-outline-light" target="_blank" rel="noopener noreferrer">Leer más</a>
              </div>
              <img :src="`/Imagenes/${articulo.img}`" class="card-img" :alt="`Artículo ${index + 1}`" />
            </div>
          </div>
        </div>
      </div>  
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
      return {
        articulos: [
          {
            titulo: 'Ansiedad y perfeccionismo: Un círculo vicioso del que es difícil salir',
            descripcion: 'Una breve descripción o adelanto del contenido.',
            img: 'Articulos/afrontar-perfeccionismo-ansiedad_ai1.jpg',
            link: 'https://www.mundopsicologos.com/articulos/ansiedad-y-perfeccionismo-un-circulo-vicioso-del-que-es-dificil-salir'
          },
          {
            titulo: 'La huella del trauma puede ser devastadora para la salud mental',
            descripcion: 'Contenido interesante para tu salud mental.',
            img: 'Articulos/Trauma-y-salud-mental.jpeg',
            link: 'https://psicopedia.org/21438/trauma-salud-mental/'
          },
          {
            titulo: 'Mindfulness en la escuela: beneficios tanto para profesores como para alumnos',
            descripcion: '¿Cómo podemos aplicar la filosofía del Mindfulness en las aulas?',
            img: 'Articulos/mindfulness-escuela-wide.jpg',
            link: 'https://psicologiaymente.com/meditacion/mindfulness-escuela-profesores-alumnos'
          },
          {
            titulo: 'Beneficios y riesgos de la IA en la atención a la salud mental, según MHE',
            descripcion: 'Descubre los riesgos sobre el uso de las IA.',
            img: 'Articulos/ia.jpg',
            link: 'https://www.infocop.es/beneficios-y-riesgos-de-la-ia-en-la-atencion-a-la-salud-mental-segun-mhe/'
          },
          {
            titulo: 'Psicoterapia para adultos: construcción de identidad y autoestima real',
            descripcion: '¿Cómo mejorar tu bienestar emocional?',
            img: 'Articulos/people-2585847-640_ai1.jpg',
            link: 'https://www.mundopsicologos.com/articulos/psicoterapia-para-adultos-construccion-de-identidad-y-autoestima-real'
          },
          {
            titulo: 'Cómo dejar de sentirte sola',
            descripcion: 'Explora nuevas formas de autoconocimiento.',
            img: 'Articulos/Sentirte-sola.jpg',
            link: 'https://psicopedia.org/21381/como-dejar-de-sentirte-sola/'
          }
        ]
      }
    },
    methods: {
      getImage(path) {
        return new URL(`../assets/${path}`, import.meta.url).href
      }
    }
  }
  </script>
  
  <style scoped>
  /* Aquí puedes añadir estilos personalizados o mantener los que ya tienes de Bootstrap */
  </style>
  