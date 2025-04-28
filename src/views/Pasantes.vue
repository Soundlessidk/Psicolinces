<template>
    <div class="page-content container my-5">
      <h2 class="text-center mb-4">Psicólogos Institucionales</h2>
  
      <div class="row g-4">
        <div
          v-for="psico in psicologos"
          :key="psico.nombre"
          class="col-md-6"
        >
          <div class="card shadow h-100">
            <div class="row g-0 h-100">
              <div class="col-md-4">
                <img :src="psico.imagen" class="img-fluid rounded-start h-100 object-fit-cover" :alt="psico.nombre" />
              </div>
              <div class="col-md-8 d-flex flex-column justify-content-between">
                <div class="card-body">
                  <h5 class="card-title">{{ psico.nombre }}</h5>
                  <p class="card-text mb-1"><strong>Horario de atención:</strong> {{ psico.horario }}</p>
                  <p class="card-text"><strong>Lugar:</strong> {{ psico.lugar }}</p>
                </div>
                <div class="card-footer bg-transparent border-0 text-end">
                  <button class="btn btn-primary btn-sm" @click="abrirModal(psico.nombre)">Agenda tu cita</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal personalizado -->
      <div v-if="mostrarModal" class="custom-modal-overlay">
        <div class="custom-modal">
          <h5>Agendar cita con: {{ psicologoSeleccionado }}</h5>
          <form @submit.prevent="enviarCita">
            <input v-model="nombre" type="text" placeholder="Nombre del alumno" required />
            <input v-model="semestre" type="text" placeholder="Semestre" required />
            <input v-model="correo" type="email" placeholder="Correo institucional" required />
            <input v-model="telefono" type="tel" placeholder="Teléfono (opcional)" />
            <textarea v-model="mensaje" placeholder="Mensaje (opcional)" rows="3"></textarea>
            <div class="mt-3">
              <button type="submit" class="btn btn-primary">Enviar</button>
              <button type="button" class="btn btn-secondary" @click="cerrarModal">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
  
      <!-- Toast -->
      <div v-if="mostrarToast" class="toast-notification">
        ¡Cita agendada exitosamente! Revisa tu correo.
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import emailjs from '@emailjs/browser'
  
  const psicologos = [
    {
      nombre: 'América Concepción Flores Arias',
      horario: 'Lunes a Viernes, 9:00 AM - 3:00 PM',
      lugar: 'Campus 1',
      imagen: '/Imagenes/Psicologos/psicologa1.png',
    },
    {
      nombre: 'Cynthia Aguila',
      horario: 'Fines de semana, 10:00 AM - 4:00 PM',
      lugar: 'Remota',
      imagen: '/Imagenes/Psicologos/psicologa1.png',
    },
  ]
  
  const mostrarModal = ref(false)
  const mostrarToast = ref(false)
  const psicologoSeleccionado = ref('')
  const correoPsicologo = ref('')
  const nombre = ref('')
  const semestre = ref('')
  const correo = ref('')
  const telefono = ref('')
  const mensaje = ref('')

  const correosPsicologas = {
    'América Concepción Flores Arias': 'ivancaz99@gmail.com',
    'Cynthia Aguila': 'ivanidk22@gmail.com',
    }

  
  const abrirModal = (nombrePsicologo) => {
    psicologoSeleccionado.value = nombrePsicologo
    correoPsicologo.value = correosPsicologas[nombrePsicologo] || 'default@tucorreo.com'
    mostrarModal.value = true
  }
  
  const cerrarModal = () => {
    mostrarModal.value = false
  }
  
  const enviarCita = () => {
    const templateParams = {
      psicologo: psicologoSeleccionado.value,
      nombre: nombre.value,
      semestre: semestre.value,
      correo: correo.value,
      telefono: telefono.value || 'No proporcionado',
      mensaje: mensaje.value || 'Sin mensaje',
      to_email: correoPsicologo.value,
    }
  
    emailjs
      .send(
        'service_bks8lh3',
        'template_6gdmsrw',
        templateParams,
        'C7YtNWm_HEpD3wb76'
      )
      .then(() => {
        mostrarToast.value = true
        cerrarModal()
        setTimeout(() => (mostrarToast.value = false), 4000)
  
        nombre.value = ''
        semestre.value = ''
        correo.value = ''
        telefono.value = ''
        mensaje.value = ''
      })
      .catch((error) => {
        alert('Error al enviar: ' + error.text)
      })
  }
  </script>
  
  <style scoped>
  .custom-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .custom-modal {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    width: 100%;
    max-width: 500px;
  }
  
  .custom-modal input,
  .custom-modal textarea {
    width: 100%;
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  
  .toast-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #198754;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    z-index: 9999;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .page-content {
    min-height: calc(100vh - 200px); /* Ajusta 200px al tamaño de tu header + footer */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  </style>
  