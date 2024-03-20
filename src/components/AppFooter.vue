<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <footer class="">
    <div class="container pb-5">
      <div class="row">
        <div class="col-12 col-md-4 footer-left text-center text-left-md">
          <img
            src="../assets/Vanadium_Gold-logo-footer.png"
            class="site_logo"
            alt="vanadium"
          />
          <div class="px-4">
            <!-- <p class="text-white mt-3"> Here is the Slogan </p> -->
            <p class="text-white m-0">Yuns Funds Management Pty Ltd <br />trading as Vanadium Fund Management</p>
            <p class="text-white">ASFL: 341321</p>
          </div>
        </div>
        <div
          class="col-12 col-md-4 footer-center text-md-start text-center p-3"
        >
          <div class="title">Quick links</div>
          <ul class="list-group mt-3">
            <li class="list-group-item border-0 bg-transparent px-0">
              <RouterLink to="/about" class="text-white">About Us </RouterLink>
            </li>
            <li class="list-group-item border-0 bg-transparent px-0">
              <RouterLink to="/service" class="text-white">Services</RouterLink>
            </li>
            <li class="list-group-item border-0 bg-transparent px-0">
              <RouterLink to="/privacy" class="text-white">Privacy Policy</RouterLink>
            </li>
            <li class="list-group-item border-0 bg-transparent px-0">
              <RouterLink to="/contact" class="text-white"
                >Contact Us</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="col-12 col-md-4 footer-right text-md-start text-center p-3">
          <div class="title">Contact Us</div>
          <ul class="list-group mt-3">
            <li class="list-group-item border-0 bg-transparent text-white px-0">
              804/97-99 Bathurst Street, Sydney NSW 2000
            </li>
            <li class="list-group-item border-0 bg-transparent text-white px-0">
              (02) 9283 9730
            </li>
            <li class="list-group-item border-0 bg-transparent text-white px-0">
              info@vanadiumfunds.com.au
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-around text-white pt-5 copyright">
      © Copyright 2014-2023-Vanadium group
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  width: 100%;
  padding: 5% 5% 1% 5%;
  background: url("../assets/images/footer-bg.png") 100% / cover no-repeat;

  .footer {
    &-left {
      p {
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }

    &-center {
      ul li {
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.75rem;
      }
    }

    &-right {
      ul li {
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: 1.75rem;
      }
    }
  }

  .site_logo {
    max-width: 240px;
    width: 100%;
  }

  .title {
    font-size: 1rem;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.075rem;
    background: linear-gradient(
      180deg,
      #d1a470 0%,
      #e1c28e 45.83%,
      #dba13f 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .copyright {
    font-size: 16px;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0.075em;
  }
}
</style>
