<template>
    <div class="card-container p-4 shadow">
      <h3 class="text-center mb-4">Líneas de ayuda psicológica</h3>
      <div class="row g-3">
        <div v-for="linea in lineas" :key="linea.nombre" class="col-md-6">
          <div :class="`card border-start border-${linea.color} border-4 h-100`">
            <div class="card-body">
              <h5 class="card-title">{{ linea.nombre }}</h5>
              <p class="card-text">{{ linea.descripcion }}</p>
              <p><strong>Tel:</strong> {{ linea.tel }}</p>
              <a :href="linea.url" target="_blank" class="text-decoration-none">Visitar sitio</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const lineas = [
    {
      nombre: 'SAPTEL',
      descripcion: 'Atención psicológica 24/7 por profesionales.',
      tel: '800 472 7835',
      url: 'https://www.saptel.org.mx',
      color: 'primary',
    },
    {
      nombre: 'Línea Nacional de Apoyo Psicológico',
      descripcion: 'Estrategia del Gobierno de México.',
      tel: '800 911 2000',
      url: 'https://www.gob.mx/salud',
      color: 'success',
    },
    {
      nombre: 'Salud Mental Guanajuato',
      descripcion: 'Atención emocional e intervención en crisis.',
      tel: '800 290 0024',
      url: 'https://salud.guanajuato.gob.mx/programas/salud-mental',
      color: 'danger',
    },
    {
      nombre: 'IMUG (Mujeres Guanajuatenses)',
      descripcion: 'Atención psicológica y asesoría legal para mujeres.',
      tel: '800 46 84 878',
      url: 'https://imug.guanajuato.gob.mx/',
      color: 'warning',
    },
  ]
  </script>
  