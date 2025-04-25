<template>
    <div class="card-container p-4 shadow">
      <h3 class="text-center mb-3">Encuentra ayuda psicológica cercana</h3>
      <p class="text-center mt-2 small text-muted">
        El mapa mostrará clínicas de salud mental cercanas a tu ubicación.
      </p>
      <form @submit.prevent="handleBuscar" class="mb-3">
        <div class="input-group">
          <input type="text" v-model="terminoBusqueda" class="form-control" placeholder="Ej. terapia, psicólogo infantil" />
          <button class="btn btn-primary" type="submit">Buscar</button>
        </div>
      </form>
      <div id="map" style="height: 374px; width: 100%; border-radius: 8px;"></div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  
  const terminoBusqueda = ref('')
  let map, userLocation
  let markers = []
  
  const initMap = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }
          map = new google.maps.Map(document.getElementById('map'), {
            center: userLocation,
            zoom: 14,
          })
  
          new google.maps.Marker({
            position: userLocation,
            map,
            title: 'Tu ubicación',
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: '#4285F4',
              fillOpacity: 1,
              strokeColor: '#fff',
              strokeWeight: 2,
            },
          })
  
          buscarLugares('psicólogo')
        },
        () => {
          alert('No se pudo obtener tu ubicación.')
        }
      )
    }
  }
  
  const buscarLugares = (termino) => {
    const service = new google.maps.places.PlacesService(map)
    markers.forEach(marker => marker.setMap(null))
    markers = []
  
    service.nearbySearch({
      location: userLocation,
      radius: 5000,
      keyword: termino,
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        results.forEach(place => {
          const marker = new google.maps.Marker({
            position: place.geometry.location,
            map,
            title: place.name,
          })
          markers.push(marker)
        })
      }
    })
  }
  
  const handleBuscar = () => {
    if (terminoBusqueda.value.trim() !== '') {
      buscarLugares(terminoBusqueda.value)
    }
  }
  
  onMounted(() => {
  if (window.google && window.google.maps) {
    initMap()
  } else {
    window.addEventListener('google-maps-loaded', initMap)
  }
})

  </script>
  
  <!-- Asegúrate de tener esta línea en index.html o en App.vue -->
  <!-- <script src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&callback=initMap&libraries=places" async defer></script> -->
  