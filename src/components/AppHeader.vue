<script setup>
import { RouterLink, RouterView } from 'vue-router'

window.addEventListener("load", (event) => {
  //點擊選單換頁後縮回選單
  let getMeunLists = document.getElementsByClassName('nav_option');
  // console.log(getMeunLists)

  for (var i = 0; i < getMeunLists.length; i++) {
    getMeunLists[i].addEventListener('click', function (e) {
      const bsCollapse = document.getElementById('burger_btn');
      bsCollapse.click();
    });
  }
});


</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <RouterLink to="/">
        <div class="navbar-brand"> <img src="../assets/vanadium-logo.png" class="site_logo" alt="vanadium"> </div>
      </RouterLink>
      <button id="burger_btn" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
        aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/"> <span class="nav-link text-white nav_option active" aria-current="page">Home</span>
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about"> <span class="nav-link text-white nav_option"> About us</span></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/service"> <span class="nav-link text-white nav_option"> Services </span></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/borrower"> <span class="nav-link text-white nav_option"> Borrower </span></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/investor"> <span class="nav-link text-white nav_option"> Investor </span></RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact"> <span class="nav-link text-white nav_option"> Contact </span></RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  width: 100%;
  padding: 1% 5%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;

  @media (max-width: 992px) {
    background: rgba(0, 0, 0, 0.8);
  }

  .site_logo {
    max-width: 240px;
    width: 100%;
  }
}
</style>
