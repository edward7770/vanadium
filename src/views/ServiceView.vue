<script setup>
import Form from "../components/Forms/Form.vue";
import FormInfo from "../components/Forms/FormInfo.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="service" class="service">
    <div class="banner position-relative">
      <!-- <div class="container-fluid p-0"> -->
      <img src="../assets/images/services-banner.png" class="" alt="" />
      <div class="banner-info position-absolute text-white text-center">
        <h1 class="text-linear-color">Services</h1>
      </div>
      <!-- </div> -->
    </div>

    <div class="sections">
      <div class="section section-2">
        <div class="container">
          <div class="row">
            <div
              class="col-12 col-md-6 text-white flex-wrap"
            >
              <h2 class="title text-linear-color">
                Borrow from US
              </h2>
              <p class="pe-md-5 pt-md-5 pb-5">
                Vanadium provides Fast and Reliable Debt Solution for
                property owner. The Funds lend against Australian Commercial
                and Residential Properties in majority of the Capital Cities and
                some major regional centres. Vanadium lends first mortgages and
                second mortgages behind major banks. Maximum lending Loan to
                Value Ratio (LVR) is 75%. Please contact us for the Maximum LVR
                for your asset. Vanadium commits itself to provide fast and
                reliable debt solutions, the fund can settle a loan within 5
                business days (subject to borrower meeting all conditions
                precedent).
              </p>
              <div class="d-grid gap-2 col-7 col-md-5 bt-style-1">
                <RouterLink to="/borrower"
                  ><button type="button" class="btn text-white service-btn">
                    Learn More
                  </button></RouterLink
                >
              </div>
            </div>
            <div class="col-12 col-md-6 ps-md-5">
              <img
                src="../assets/images/services-img-5.png"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section section-3">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6 pe-md-5">
              <img
                src="../assets/images/services-img-2.png"
                alt=""
                width="100%"
              />
            </div>

            <div
              class="col-12 col-md-6 text-white d-flex align-content-between flex-wrap ps-md-5 pt-3"
            >
              <h2 class="title text-linear-color">
                Invest with US
              </h2>
              <p class="pe-md-5">
                Vanadium Fund Management
                holds an Australian Financial Service License (AFSL No.543698).
                Vanadium currently offers two different investment products,
                Vanadium Mortgage Fund and Vanadium Contributory Mortgage Fund.
              </p>
              <p class="pe-md-5">
                The Vanadium Mortgage Fund is a pool fund which provides
                reasonably stable and predictable income based on target fixed
                rates of return over a set period.
              </p>
              <p class="pe-md-5">
                The Vanadium Contributory Mortgage Fund is a project based fund,
                which allows the investors to pick and choose the
                investment/loan that suits their risk and return appetite.
              </p>
              <div class="d-grid gap-2 col-7 col-md-5 bt-style-1">
                <RouterLink to="/borrower"
                  ><button type="button" class="btn text-white service-btn">
                    Learn More
                  </button></RouterLink
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-5 py-5">
        <div class="container py-5">
          <div class="row">
            <div class="col-12 col-md-5 pe-md-5">
              <FormInfo />
            </div>
            <div class="col-12 col-md-7 ps-md-5">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
#service {
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
    background: url("../assets/images/bg-img-03.png") 100% / cover no-repeat;

    .title {
      font-size: 2.25rem;
      font-style: normal;
      font-weight: 700;
      line-height: 2.8rem;
    }

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

      .service-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .bt-style-1 {
        margin-bottom: 1rem;
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

        h6 {
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 500;
          line-height: 101.5%;
        }
      }

      &-3 {
        padding: 5rem 1rem;
        background: url("../assets/images/services-bg-2.png");
      }

      &-4,
      &-5 {
        .title {
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 500;
          line-height: 1.75rem;
        }

        ul {
          li {
            font-weight: 500;

            &:first-of-type {
              color: #b7b7b7;
              font-size: 1.25rem;
              font-style: normal;
              font-weight: 500;
            }
          }
        }
      }

      &-5 {
        background: url("../assets/images/contact-bg.png");
      }
    }
  }

  @media (max-width: 768px) {
    .section {
      .title {
        font-size: 2.2rem !important;
        line-height: 2.8rem !important;
      }
    }
  }
}
</style>
