<template>
    <section class="eventos-section">
      <div class="container text-center">
        <h2 class="titulo-eventos">Conoce nuestros eventos</h2>
        <p class="subtitulo-eventos">Participa y fortalece tu bienestar emocional con nuestras actividades</p>
  
        <div class="row justify-content-center">
          <div
            v-for="evento in eventos"
            :key="evento.nombre"
            class="col-md-6 col-lg-3 mb-4"
          >
            <div class="evento-card">
              <img :src="evento.imagen" :alt="evento.nombre" class="card-img" />
              <div class="evento-info">
                <h5>{{ evento.nombre }}</h5>
                <p>{{ evento.descripcion }}</p>
                <button class="btn btn-outline-primary btn-sm" @click="abrirModal(evento.nombre)">
                  Inscribirme
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal personalizado con Vue -->
      <div v-if="mostrarModal" class="custom-modal-overlay">
  <div class="custom-modal">
    <div class="modal-header">
      <h3>Inscripción al evento: {{ eventoNombre }}</h3>
      <button class="close-btn" @click="cerrarModal">&times;</button>
    </div>
    <form @submit.prevent="enviarFormulario" class="modal-form">
      <div class="form-group">
        <label>Nombre completo</label>
        <input v-model="nombre" type="text" required />
      </div>
      <div class="form-group">
        <label>Edad</label>
        <input v-model="edad" type="number" required />
      </div>
      <div class="form-group">
        <label>Carrera</label>
        <input v-model="carrera" type="text" required />
      </div>
      <div class="form-group">
        <label>Semestre</label>
        <input v-model="semestre" type="text" required />
      </div>
      <div class="form-group">
        <label>Correo institucional</label>
        <input v-model="correo" type="email" required />
      </div>
      <div class="modal-actions">
        <button type="submit" class="btn-primary">Enviar</button>
        <button type="button" class="btn-secondary" @click="cerrarModal">Cancelar</button>
      </div>
    </form>
  </div>
</div>

<div v-if="mostrarToast" class="toast-container">
  <div class="toast-message">
    ¡Gracias por inscribirte! Revisa tu correo.
    <button class="toast-close" @click="mostrarToast = false">×</button>
  </div>
</div>

    </section>
    
  </template>

  
  
  <script setup>
  import { ref } from 'vue'
  import emailjs from '@emailjs/browser'
  
  const mostrarModal = ref(false)
  const eventoNombre = ref('')
  
  const nombre = ref('')
  const edad = ref('')
  const carrera = ref('')
  const semestre = ref('')
  const correo = ref('')
  const mostrarToast = ref(false)

  const mostrarNotificacion = () => {
  
  mostrarToast.value = true
    setTimeout(() => {
        mostrarToast.value = false
    }, 3000)
    }
  
  const eventos = [
    {
      nombre: 'Estrésometro',
      descripcion: 'Autoevaluación de estrés con consejos prácticos. Fecha: 25 de abril.',
      imagen: '/Imagenes/Coferencias/22ec3469-2d43-4858-8573-482f6043218e.jpg',
    },
    {
      nombre: 'Actividad Sensorial',
      descripcion: 'Relajación con los sentidos y ejercicios de respiración.',
      imagen: '/Imagenes/Coferencias/ActividadSensorial.jpg',
    },
    {
      nombre: 'Conferencia de Salud Mental',
      descripcion: 'Estrategias con un especialista para mejorar salud emocional.',
      imagen: '/Imagenes/Coferencias/SaludMental.jpg',
    },
  ]
  
  const abrirModal = (nombreEvento) => {
    eventoNombre.value = nombreEvento
    mostrarModal.value = true
  }
  
  const cerrarModal = () => {
    mostrarModal.value = false
  }
  
  const enviarFormulario = () => {
    const templateParams = {
      evento: eventoNombre.value,
      nombre: nombre.value,
      edad: edad.value,
      carrera: carrera.value,
      semestre: semestre.value,
      correo: correo.value,
    }
  
    emailjs
        .send(
            'service_bks8lh3', // ✅ Tu Service ID
            'template_ij0q9sj', // ✅ Tu Template ID
            templateParams,
            'C7YtNWm_HEpD3wb76' // ✅ Tu Public Key
        )
      .then(
        () => {
          mostrarNotificacion()
          cerrarModal()
          // Limpiar campos
          nombre.value = ''
          edad.value = ''
          carrera.value = ''
          semestre.value = ''
          correo.value = ''
        },
        (error) => {
          alert('Ocurrió un error: ' + error.text)
        }
      )
  }
  </script>
  
  <style scoped>
    .custom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.custom-modal {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-in-out;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.modal-header h3 {
  margin: 0;
}

.close-btn {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
}

.modal-form .form-group {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}

.modal-form label {
  margin-bottom: 0.4rem;
  font-weight: 600;
}

.modal-form input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

@keyframes fadeIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.toast-container {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 9999;
}

.toast-message {
  background-color: #28a745;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  animation: fadeIn 0.4s ease;
}

.toast-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
}
  </style>
  