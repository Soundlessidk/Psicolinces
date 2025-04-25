<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="/Imagenes/logo2.svg" alt="Logo Psicolinces" width="70px" class="me-3" />
        Psicolinces
      </RouterLink>

      <button class="navbar-toggler" type="button" @click="toggleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Inicio</RouterLink>
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/consejos">Consejos</RouterLink>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#introduccion' }">Importancia de la salud mental</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#consejos' }">Disminuir el estrés</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#metas' }">Metas realistas</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#ansiedad' }">Manejar ansiedad</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#procrastinar' }">Procrastinación</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#relaciones' }">Relaciones</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#autoconocimiento' }">Autoconocimiento</RouterLink></li>
            </ul>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/eventos">Eventos</RouterLink>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Psicólogos
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/pasantes">Pasantes</RouterLink></li>
            </ul>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/contacto">Contacto</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/recursos">Recursos</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleMenu() {
      const navbarCollapse = document.getElementById('navbarNav');
      navbarCollapse.classList.toggle('show');
    }
  }
};
</script>