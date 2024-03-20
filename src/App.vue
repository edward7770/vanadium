<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/AppHeader.vue'
import Footer from './components/AppFooter.vue'

</script>

<template>
  <Header></Header>
  <RouterView />
  <!-- <div class="container-lg"></div> -->

  <Footer></Footer>

</template>


<style scoped>

</style>
