<script setup>
import Form from "../components/Forms/Form.vue";
</script>

<template>
  <div id="contact" class="service">
    <div class="banner position-relative">
      <img src="../assets/images/contact-banner.png" class="" alt="" />
      <div class="banner-info position-absolute text-white text-center">
        <h1 class="text-linear-color">Contact</h1>
        <!-- <p> Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. Vivamus viverra ante turpis, dignissim </p> -->
      </div>
    </div>

    <div class="sections">
      <div class="section section-2">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 text-white align-content-between flex-wrap pb-3">
              <!-- <div>
                <h2 class="title">Contact us today</h2>
                <p class="pe-5"> We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to provide feedback, we're all ears. Reach out to us using any of the methods below, and we promise to get back to you as soon as possible. </p>
              </div> -->
              <div>
                <h3 class="sub-title text-linear-color">Our Location</h3>
                <p>804/97-99 Bathurst Street, Sydney NSW 2000</p>
              </div>
              <div>
                <h3 class="sub-title text-linear-color">Quick Contacts</h3>
                <p>info@vanadiumfunds.com.au</p>
                <p>(02) 9283 9730</p>
              </div>
              <div>
                <ul class="list-group list-group-horizontal">
                  <li class="list-group-item bg-transparent border-0">
                    <i class="fa-brands fa-twitter" style="color: #ffffff"></i>
                  </li>
                  <li class="list-group-item bg-transparent border-0">
                    <i class="fa-brands fa-facebook-f" style="color: #ffffff"></i>
                  </li>
                  <li class="list-group-item bg-transparent border-0">
                    <i class="fa-brands fa-youtube" style="color: #ffffff"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12 col-md-6 ps-md-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5914119459408!2d151.20588949999998!3d-33.8744194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3c4026c7c9%3A0x8c004861c36fcaa!2s97%2F99%20Bathurst%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1692929384651!5m2!1sen!2sau"
                max-width="600" width="100%" height="350" style="border: 0" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-3 py-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-12 col-md-8 m-auto">
              <h1 class="text-center text-white">Get in touch</h1>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#contact {
  background: #000;

  .banner {
    height: 80vh;
    overflow: hidden;

    @media (max-width: 768px) {
      height: 35vh;
    }

    img {
      width: 100%;
      height: inherit;
      object-fit: cover;
    }

    .banner-info {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      h1 {
        font-size: 6rem;
        font-weight: 700;
      }

      p {
        font-size: 1rem;
        line-height: 1.5rem;
      }

      @media (max-width: 1024px) {
        h1 {
          font-size: 4.5rem;
          padding: 1rem;
        }
      }

      @media (max-width: 568px) {
        h1 {
          font-size: 3.2rem;
          padding: 1rem;
        }
      }
    }
  }

  .sections {
    background: url("../assets/images/contact-bg-2.png") 100% / cover no-repeat;

    h3 {
      color: #b7b7b7;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 500;
      line-height: 101.5%;
    }

    h2 span {
      display: block;
      font-weight: 600;
      line-height: 5rem;
    }

    .section {
      padding: 2% 5%;

      .sub-title {
        font-size: 1.2rem;
        font-weight: 500;
        color: #fff;
      }

      img {
        height: 100%;
        width: 100%;
      }

      &-1 {
        h2 {
          font-size: 2rem;
          font-style: normal;
          font-weight: 500;
          line-height: 101.5%;
        }
      }

      &-2 {
        padding: 8rem 1rem;

        @media (max-width: 768px) {
          padding: 3rem 1rem;
        }

        p {
          text-align: justify;
        }
      }

      &-3 {
        padding: 5rem 1rem;
      }
    }
  }
}
</style>
