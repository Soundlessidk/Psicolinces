<template>
    <div class="container my-5">
      <div class="text-center mb-5">
        <h2 class="fw-bold">Recursos</h2>
        <p class="text-muted fs-5">
          En esta sección encontrarás diversos artículos, infografías y documentos relacionados con el estrés académico...
        </p>
      </div>
  
      <div class="row" v-for="(grupo, index) in recursosPorGrupo" :key="index">
        <div class="col-md-6 col-lg-4 mb-4" v-for="(recurso, idx) in grupo" :key="idx">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body d-flex flex-column">
              <div class="mb-3 text-center">
                <img src="https://cdn-icons-png.flaticon.com/512/337/337946.png" alt="PDF" width="60" />
              </div>
              <h5 class="card-title">{{ recurso.titulo }}</h5>
              <p class="card-text flex-grow-1">{{ recurso.descripcion }}</p>
              <a :href="recurso.ruta" class="btn btn-primary mt-auto" download>Descargar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const recursos = [
    {
      titulo: "Estrés Académico: El Enemigo Silencioso del Estudiante",
      descripcion:
        "Esta investigación estudia los estresores que desencadenan estrés académico en estudiantes de Enfermería...",
      ruta: "/Recursos/EstresAcad1.pdf",
    },
    {
      titulo: "Estrés Académico en Estudiantes Universitarios en Situaciones de Crisis y Emergencias",
      descripcion:
        "Este estudio analiza la evidencia científica sobre el estrés académico en universitarios durante la pandemia del COVID-19...",
      ruta: "/Recursos/EstresAcad2.pdf",
    },
    {
      titulo: "Conoce al ¿Enemigo? Estrés Académico",
      descripcion:
        "Esta infografía explica que el estrés académico es un proceso cognitivo y emocional...",
      ruta: "/Recursos/EstresAcad3.pdf",
    },
    {
      titulo: "Hablemos de Estrés Académico",
      descripcion:
        "Esta infografía identifica los estresores más comunes en el entorno académico...",
      ruta: "/Recursos/EstresAcad4.pdf",
    },
    {
      titulo: "El Estrés Académico como Proceso Sistémico",
      descripcion:
        "Esta infografía explica el estrés académico como un proceso sistémico que involucra estímulos estresores...",
      ruta: "/Recursos/EstresAcad5.pdf",
    },
    {
      titulo: "Estrés Académico en Estudiantes Universitarios",
      descripcion:
        "Este estudio determina el nivel de estrés en estudiantes universitarios...",
      ruta: "/Recursos/EstresAcad6.pdf",
    },
    {
      titulo: "Estrés Académico: El Enemigo Silencioso del Estudiante",
      descripcion:
        "Esta infografía describe el estrés académico como un proceso sistemático que se presenta cuando el alumno...",
      ruta: "/Recursos/EstresAcad7.pdf",
    },
    {
      titulo: "Principales Estresores Académicos en Estudiantes de Enfermería",
      descripcion:
        "Este estudio identifica los principales estresores académicos en estudiantes de Enfermería...",
      ruta: "/Recursos/EstresAcad8.pdf",
    },
  ]
  
  // Agrupar recursos por 3 para formar filas
  const recursosPorGrupo = []
  for (let i = 0; i < recursos.length; i += 3) {
    recursosPorGrupo.push(recursos.slice(i, i + 3))
  }
  </script>
  