<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="/Imagenes/logo2.svg" alt="Logo Psicolinces" width="70px" class="me-3" />
        Psicolinces
      </RouterLink>

      <button class="navbar-toggler" type="button" @click="handleMenu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click="handleMenu">Inicio</RouterLink>
          </li>

          <li class="nav-item dropdown">
            <RouterLink class="nav-link" to="/consejos" @click="handleMenu">Consejos</RouterLink>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#introduccion' }" @click="handleMenu">Importancia de la salud mental</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#consejos' }" @click="handleMenu">Disminuir el estrés</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#metas' }" @click="handleMenu">Metas realistas</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#ansiedad' }" @click="handleMenu">Manejar ansiedad</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#procrastinar' }" @click="handleMenu">Procrastinación</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#relaciones' }" @click="handleMenu">Relaciones</RouterLink></li>
              <li><RouterLink class="dropdown-item" :to="{ path: '/consejos', hash: '#autoconocimiento' }" @click="handleMenu">Autoconocimiento</RouterLink></li>
            </ul>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/eventos" @click="handleMenu">Eventos</RouterLink>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
              Psicólogos
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/pasantes" @click="handleMenu">Pasantes</RouterLink></li>
            </ul>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/contacto" @click="handleMenu">Contacto</RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink class="nav-link" to="/recursos" @click="handleMenu">Recursos</RouterLink>
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
    handleMenu() {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      } else {
        navbarCollapse.classList.add('show');
      }
    }
  }
};
</script>