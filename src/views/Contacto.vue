<template>
    <div class="container mt-5">
      <div class="text-center mb-4">
        <h1 class="fw-bold">¿Necesitas ayuda psicológica?</h1>
        <p class="fs-5 text-muted">
          En esta sección encontrarás herramientas para ubicar clínicas cercanas y líneas de apoyo psicológico tanto a nivel nacional como en el estado de Guanajuato.
        </p>
      </div>
  
      <div class="row justify-content-center g-4 mt-5 mb-5">
        <div class="col-md-6">
          <MapaPsicologos />
        </div>
        <div class="col-md-6">
          <LineasAyuda />
        </div>
      </div>
  
      <FormularioContacto />
    </div>
  </template>
  
  <script setup>
  import MapaPsicologos from '../components/MapaPsicologos.vue';
  import LineasAyuda from '../components/LineasAyuda.vue';
  import FormularioContacto from '../components/FormularioContacto.vue';
  </script>
  