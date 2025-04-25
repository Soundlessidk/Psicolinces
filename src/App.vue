<!-- src/App.vue -->
<template>
  <div id="app">
    <Header />
    <router-view /> <!-- Aquí se cargará Home.vue -->
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>
