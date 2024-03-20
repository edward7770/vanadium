<script setup>
import BannerSlider from "../components/Sliders/BannerSlider.vue";
import SecOneSlider from "../components/Sliders/HomeSecOneSlider.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <main>
    <div class="contanier-fluid home">
      <div class="banner">
        <div class="container-fluid p-0">
          <BannerSlider />
        </div>
      </div>

      <!-- section -->
      <div class="sections">
        <div class="section section-1 text-white">
          <div class="container">
            <div class="first-block">
              <div class="row">
                <SecOneSlider />
                <!-- <div class="col col-lg-6 left">
                  <div class="row">
                    <div class="col-5">
                      <img src="../assets/images/icons/icon-2.png" alt="">
                    </div>
                    <div class="col-7 text-end">
                      <span>mi tristique rhoncus. Etiam dapibus rutrum leo consect</span>
                    </div>
                  </div>
                  <div class="col-12 pt-5 pb-3">
                    <h4>Who we are?</h4>
                    <h1>Vanadium</h1>
                  </div>
                  <div class="col-12 pt-5 pb-3">
                    service
                  </div>
                </div>
                <div class="col col-lg-3 p-0"> <img src="../assets/images/image-2.png" alt="" width="100%" height="100%">
                </div>
                <div class="col col-lg-3 d-flex align-items-center right">
                  <div class="p-4">
                    <h2 class="title text-center"> Title </h2>
                    <p class="desc"> Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur
                      accumsan. Vivamus viverra ante turp </p>
                  </div>
                  <div> </div>
                </div> -->
              </div>
            </div>
          </div>
        </div>

        <div class="section section-2">
          <div class="service">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <h1 class="title text-linear-color">Services</h1>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mt-3 mb-3">
                  <RouterLink to="/investor#vanadiumMortgageFund">
                    <div
                      class="card text-left text-white rounded-0 bg-transparent"
                    >
                      <img
                        src="../assets/images/service-img-1.png"
                        class="card-img-top rounded-0 m-auto"
                        alt="icon"
                        style=""
                      />
                      <div class="card-body pt-5 pb-5">
                        <h5 class="card-title">Vanadium Mortgage Fund</h5>
                        <p class="card-text">
                          Fixed income mortgage fund backed by first and second
                          ranked mortgages over real estate located in
                          Australia.
                        </p>
                      </div>
                    </div>
                  </RouterLink>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mt-3 mb-3">
                  <RouterLink to="/investor">
                    <div
                      class="card text-left text-white rounded-0 bg-transparent"
                    >
                      <img
                        src="../assets/images/service-img-6.jpg"
                        class="card-img-top rounded-0 m-auto"
                        alt="icon"
                        style=""
                      />
                      <div class="card-body pt-5 pb-5">
                        <h5 class="card-title">Vanadium Contributory Fund</h5>
                        <p class="card-text">
                          Contributory Mortgage Fund allows investors to choose
                          the mortgage investment that matches their risk
                          appetites.
                        </p>
                      </div>
                    </div>
                  </RouterLink>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mt-3 mb-3">
                  <RouterLink to="/investor">
                    <div
                      class="card text-left text-white rounded-0 bg-transparent"
                    >
                      <img
                        src="../assets/images/borrowor-img-3.png"
                        class="card-img-top rounded-0 m-auto"
                        alt="icon"
                        style=""
                      />
                      <div class="card-body pt-5 pb-5">
                        <h5 class="card-title">Commercial Loans</h5>
                        <p class="card-text">
                          Vanadium lend against Commercial Assets
                          (including future development sites) that locate in
                          Metro Area of Capital Cities of Australian States and
                          Territories except Northern Territory, and Major Regional
                          Centres in NSW, QLD and VIC.
                        </p>
                      </div>
                    </div>
                  </RouterLink>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mt-3 mb-3">
                  <RouterLink to="/investor">
                    <div
                      class="card text-left text-white rounded-0 bg-transparent"
                    >
                      <img
                        src="../assets/images/borrowor-img-1.png"
                        class="card-img-top rounded-0 m-auto"
                        alt="icon"
                        style=""
                      />
                      <div class="card-body pt-5 pb-5">
                        <h5 class="card-title">Residential Loans</h5>
                        <p class="card-text">
                          Vanadium lend against Residential Assets
                          (including future development sites) that locate in
                          Metro Area of Capital Cities of Australian States and
                          Territories except Northern Territory, and Major Regional
                          Centres in NSW, QLD and VIC.
                        </p>
                      </div>
                    </div>
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section section-3">
          <div class="container">
            <div class="row">
              <div class="col m-auto text-center text-white description">
                <h1 class="mb-5 text-linear-color">Why choose us?</h1>
                <p>
                  Vanadium Fund
                  Management is the investment manager of the Funds. Vanadium
                  holds an Australian Financial Service License (AFSL
                  No.543698).
                </p>
                <p>
                  Vanadium is established by experienced property and finance
                  professionals that have 80 years combined experiences in the
                  local market. Through senior staff in Sydney, Vanadium Fund
                  Management has extensive networks and transaction sourcing
                  capabilities, utilising existing direct relationships with
                  borrowers as well as intermediaries and third-party
                  consultants. Vanadium Fund Management pride themselves on
                  their origination capability and this will continue to gain
                  access to quality opportunities for the Fund. The Fund will
                  deploy capital to real estate loans with an aim to generate
                  consistent returns across market and economic cycles.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="section section-4">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-4 mb-5 mb-xs-0">
                <div class="card text-center text-white border border-white rounded-0">
                  <img src="../assets/images/icons/icon-1.png" class="card-img-top m-auto" alt="icon" style="width:50px;">
                  <div class="card-body">
                    <h5 class="card-title">Feature one</h5>
                    <p class="card-text"> Cras tincidunt tellus at mi tristique rhoncus. Etiam at mi tristique rhoncus.
                      Etiam </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 mb-5 mb-xs-0">
                <div class="card text-center text-white border border-white rounded-0">
                  <img src="../assets/images/icons/icon-1.png" class="card-img-top m-auto" alt="icon" style="width:50px;">
                  <div class="card-body">
                    <h5 class="card-title">Feature one</h5>
                    <p class="card-text"> Cras tincidunt tellus at mi tristique rhoncus. Etiam at mi tristique rhoncus.
                      Etiam </p>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-4 mb-5 mb-xs-0">
                <div class="card text-center text-white border border-white rounded-0">
                  <img src="../assets/images/icons/icon-1.png" class="card-img-top m-auto" alt="icon" style="width:50px;">
                  <div class="card-body">
                    <h5 class="card-title">Feature one</h5>
                    <p class="card-text"> Cras tincidunt tellus at mi tristique rhoncus. Etiam at mi tristique rhoncus.
                      Etiam </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div> -->
      </div>

      <!-- <TheWelcome /> -->
    </div>
  </main>
</template>

<style scoped lang="scss">
.home {
  // min-height: 90vh;
  // display: flex;
  // align-items: center;

  .banner {
    // width: 100%;
    // height: 86vh;
    // background: url(../assets/images/vanadium-banner-img.png) 100% no-repeat;
  }

  .sections {
    width: 100%;
    height: 100%;
    background: url(../assets/images/vanadium-bg-img.png) 100% / cover no-repeat;
    padding-bottom: 3rem;

    .section {
      padding: 3rem 3rem;

      &-1 {
        .first-block {
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.6) 0%,
            #252525 100%
          );
          margin-top: -10%;

          .left {
            padding: 8% 2% 5% 8%;
          }

          h4 {
            font-size: 2.25rem;
            font-style: normal;
            font-weight: 500;
          }

          h1 {
            font-size: 4rem;
            font-style: normal;
            font-weight: 700;
          }

          .right {
            .title {
              font-size: 2.5rem;
              font-style: normal;
              font-weight: 500;
              line-height: 101.5%;
            }

            .desc {
              font-size: 1rem;
              font-style: normal;
              font-weight: 400;
              line-height: 1.75rem;
            }
          }
        }
      }

      &-2 {
        .service {
          .title {
            font-size: 3rem;
            font-weight: 700;
          }
          .card-img-top {
            height: 300px;

            @media (max-width: 768px) {
              height: auto;
            }
          }
          .card-body {
            min-height: 307.5px;
            background: linear-gradient(
              180deg,
              #3d3d3d 0%,
              rgba(61, 61, 61, 0.42) 100%
            );

            .card-title {
              font-size: 1.25rem;
              font-weight: 500;
              line-height: normal;
            }

            .card-text {
              font-size: 0.875rem;
              line-height: 1.55rem;
            }
          }

          @media (max-width: 1399px) and (min-width: 1220px) {
            .card-body {
              min-height: 340px;
            }
          }

          @media (max-width: 1199px) and (min-width: 998px) {
            .card-body {
              min-height: 438px;
            }
          }

          @media (max-width: 768px) {
            .card-body {
              min-height: auto;
            }
          }
        }
      }

      &-3 {
        .description {
          background: rgba(33, 33, 33, 0.8);
          padding: 6% 8%;
        }
      }

      &-4 {
        // padding: 10% 25%;
        .card {
          background-color: rgba(33, 33, 33, 0.8);
          padding: 15% 5%;

          .card-title {
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 1.75rem;
          }

          .card-text {
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.75rem;
          }
        }
      }
    }

    @media (max-width: 568px) {
      .section {
        padding: 3rem 1rem;

        &-3 {
          .description {
            background: rgba(33, 33, 33, 0.8);
            padding: 3% 5%;
          }
        }
      }
    }
  }
}
</style>
