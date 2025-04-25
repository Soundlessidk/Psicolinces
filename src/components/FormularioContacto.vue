<template>
    <div class="text-center mb-5">
      <i class="bi bi-chat-left-dots fs-1 text-primary"></i>
      <h4 class="mt-3">¿Tienes alguna duda o comentario?</h4>
      <p class="text-muted">Puedes escribirnos y te responderemos lo antes posible.</p>
      <button class="btn btn-outline-primary mt-2" @click="abrirModal">Contáctanos</button>
  
      <!-- Modal controlado por Vue -->
      <div v-if="showModal" class="modal-backdrop-fix">
        <div class="modal d-block" tabindex="-1" @click.self="cerrarModal">
          <div class="modal-dialog">
            <form @submit.prevent="enviarCorreo" ref="formRef" class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Contáctanos</h5>
                <button type="button" class="btn-close" @click="cerrarModal"></button>
              </div>
              <div class="modal-body">
                <div class="mb-3">
                  <label class="form-label">Tu correo electrónico</label>
                  <input type="email" v-model="correo" required class="form-control" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Mensaje</label>
                  <textarea v-model="mensaje" required class="form-control" rows="4"></textarea>
                </div>
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary" type="submit">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Toasts -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3" style="z-index: 2000;">
      <div v-if="toastSuccess" class="toast align-items-center text-bg-success show fade" role="alert">
        <div class="d-flex">
          <div class="toast-body">
            ¡Mensaje enviado con éxito!
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" @click="toastSuccess = false"></button>
        </div>
      </div>
      <div v-if="toastError" class="toast align-items-center text-bg-danger show fade" role="alert">
        <div class="d-flex">
          <div class="toast-body">
            Error al enviar el mensaje. Intenta de nuevo.
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" @click="toastError = false"></button>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import emailjs from '@emailjs/browser'
  
  const showModal = ref(false)
  const correo = ref('')
  const mensaje = ref('')
  const formRef = ref(null)

  const toastSuccess = ref(false)
const toastError = ref(false)
  
  const abrirModal = () => {
    showModal.value = true
  }
  
  const cerrarModal = () => {
    showModal.value = false
    correo.value = ''
    mensaje.value = ''
  }

  const mostrarToast = (tipo) => {
  if (tipo === 'success') {
    toastSuccess.value = true
    setTimeout(() => toastSuccess.value = false, 4000)
  } else if (tipo === 'error') {
    toastError.value = true
    setTimeout(() => toastError.value = false, 4000)
  }
}
  
  const enviarCorreo = () => {
    emailjs
    .send('service_zgc4lqe', 'template_8iy0kcn', {
        correo: correo.value,
        mensaje: mensaje.value
        }, 'kXq0NjMzxA_G2Yrsg')
      .then(() => {
        mostrarToast('success')
        cerrarModal()
      })
      .catch(() => {
        mostrarToast('error')
      })
  }
  </script>
  
  <style scoped>
  .modal-backdrop-fix {
    position: fixed;
    inset: 0;
    z-index: 1050;
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
  