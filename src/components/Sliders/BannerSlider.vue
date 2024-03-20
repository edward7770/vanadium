<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="home_banner">
    <div class="bg_img">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 mt-5 mt-md-0">
            <div id="carouselBannerFade2" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="carousel-inner position-absolute">
                <div class="carousel-item active">
                  <div class="position-absolute info_block">
                    <div class="info info-2">
                      <h6 class="text-linear-color">
                        Open for Investment
                      </h6>
                      <h1 class="text-end-md text-linear-color">
                        Vanadium Mortgage Fund
                      </h1>
                      <p class="pt-3 m-0">7.60% p.a. For 1 Year Investment</p>
                      <p class="pb-3">8.60% p.a. For 2 Year Investment</p>
                      <RouterLink to="/investor?jump=VanadiumMortgageFundBox">
                        <button class="btn bt-style-2 text-white rounded-0 d-flex justify-content-between">
                          <span> Learn more </span> <span> > </span>
                        </button>
                      </RouterLink>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="position-absolute info_block">
                    <div class="info info-2">
                      <h6 class="text-linear-color">
                        Open for Investment
                      </h6>
                      <h1 class="text-end-md text-linear-color">
                        Vanadium Contributory Mortgage Fund
                      </h1>
                      <p class="pt-3">
                        Project Based Mortgage Funds that provide investor
                        opportunity to invest in projects suit their
                        risk/return appetite.
                      </p>
                      <RouterLink to="/investor?jump=VanadiumContributoryMortgageFundBox">
                        <button class="btn bt-style-2 text-white rounded-0 d-flex justify-content-between">
                          <span> Learn more</span> <span> > </span>
                        </button>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>

              <div class="line"></div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselBannerFade2"
                data-bs-slide="prev">
                <span class="" aria-hidden="true">01</span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselBannerFade2"
                data-bs-slide="next">
                <span class="" aria-hidden="true">02</span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div class="col-12 col-lg-6 pb-5">
            <div id="carouselBannerFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
              <div class="carousel-inner position-absolute">
                <div class="carousel-item active">
                  <!-- <img src="../../assets/images/vanadium-banner-img.png" class="d-block w-100" alt="banner1"> -->
                  <div class="position-absolute info_block">
                    <!-- <div class="row"> -->
                    <div class="info info-1">
                      <!-- <h3>01</h3> -->
                      <!-- <h1>Stable and Risk Adjusted Return for Investors</h1> -->
                      <h1> Set Sail to Secure Your Financial Future</h1>
                    </div>
                    <div class="carousel-btn-group">
                      <div class="btn-line"></div>
                      <button class="carousel-control-prev prev-right" type="button" data-bs-target="#carouselBannerFade"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next next-right" type="button" data-bs-target="#carouselBannerFade"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <!-- <img src="../../assets/images/vanadium-banner-img.png" class="d-block w-100" alt="banner2"> -->
                  <div class="position-absolute info_block">
                    <div class="">
                      <div class="info info-1">
                        <!-- <h3>02</h3> -->
                        <h1>Stable and Risk Adjusted Return for Investors</h1>
                        <!-- <h1>Fast and Reliable Capital for Property Owners</h1> -->
                      </div>
                    </div>
                    <div class="carousel-btn-group">
                      <div class="btn-line"></div>
                      <button class="carousel-control-prev prev-right" type="button" data-bs-target="#carouselBannerFade"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next next-right" type="button" data-bs-target="#carouselBannerFade"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <!-- <img src="../../assets/images/vanadium-banner-img.png" class="d-block w-100" alt="banner2"> -->
                  <div class="position-absolute info_block">
                    <div class="">
                      <div class="info info-1">
                        <!-- <h3>02</h3> -->
                        <h1>Fast and Reliable Funding Sources for Property Owners</h1>
                      </div>
                    </div>
                    <div class="carousel-btn-group">
                      <div class="btn-line"></div>
                      <button class="carousel-control-prev prev-right" type="button" data-bs-target="#carouselBannerFade"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next next-right" type="button" data-bs-target="#carouselBannerFade"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#home_banner {
  height: 100vh;
  // min-height: 1080px;
  overflow: hidden;

  .bg_img {
    z-index: -1;
    height: 100%;
    background: url("../../assets/images/vanadium-banner-img.png") 100% / cover no-repeat;
  }

  #carouselBannerFade {
    height: 100vh;
    overflow: hidden;

    .carousel-inner {
      height: inherit;
    }

    .carousel-item {
      height: inherit;
      transition: transform 3s, opacity 0.5s;
    }

    .carousel-control-prev,
    .carousel-control-next {
      width: 45px;
      height: 45px;
      position: absolute;
      border: 1px solid #ccc;
      border-radius: 50%;
      padding: 1px;
      top: 80%;
    }

    .carousel-control-prev {
      left: 14%;
    }

    .carousel-control-next {
      left: 26%;
    }

    .info_block {
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      padding: 1rem 2rem;
      max-width: 550px;
      height: 456px;
      background: linear-gradient(180deg, #000 0%, rgba(75, 75, 75, 0.41) 100%);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .carousel-btn-group {
        position: absolute;
        bottom: 38px;
        right: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .btn-line {
          width: 48.18%;
          height: 1px;
          background: #fff;
        }

        .prev-right {
          position: static;
          margin-left: 2px;
        }

        .next-right {
          position: static;
          margin-left: 4px;
        }
      }

      .info {
        // padding: 2rem 5rem;
        // max-height: 550px;
        // height: 70%;
        padding: 3rem;

        h3 {
          font-size: 6rem;
          font-weight: 300;
        }

        h1 {
          font-size: 2.2rem;
          font-weight: 600;
          line-height: 3rem;
        }
      }
    }

    @media (max-width: 1400px) {
      .info_block {
        .info {
          padding: 1.5rem 2.5rem;
          // height: 70%;

          h3 {
            font-size: 4.5rem;
          }

          h1 {
            font-size: 2.1rem;
            line-height: 2.7rem;
          }
        }
      }
    }

    @media (max-width: 1024px) {

      .carousel-control-prev,
      .carousel-control-next {
        top: 90%;
      }

      .carousel-control-next {
        left: 28%;
      }
    }
  }

  // carouselBannerFade2
  #carouselBannerFade2 {
    height: 100vh;
    overflow: hidden;

    .line {
      border: 1px solid #fff;
      width: 1px;
      height: 45%;
      position: absolute;
      left: 2%;
      top: 46%;
      transform: translate(0%, -50%);
    }

    .carousel-inner {
      height: inherit;
    }

    .carousel-item {
      height: inherit;
      transition: transform 3s, opacity 0.5s;
    }

    .carousel-control-prev,
    .carousel-control-next {
      width: 25px;
      height: 25px;
      position: absolute;
      padding: 1px;
      color: #fff;
      font-size: 0.8rem;
    }

    .carousel-control-prev {
      top: 20%;
      right: 95.2%;
    }

    .carousel-control-next {
      top: 70%;
      right: 95.2%;
    }

    .info_block {
      width: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      padding: 1rem 2rem;

      .info {
        // height: 70%;
        padding: 1rem;

        &-2 {
          h1 {
            font-size: 2.7rem;
            font-weight: 700;
            line-height: 3.2rem;
          }

          h6 {
            font-size: 1.3rem;
            font-weight: 500;
            line-height: normal;
          }

          p {
            font-size: 1.2rem;
            font-weight: 400;
            line-height: 1.55rem;
          }
        }
      }
    }

    @media (max-width: 1400px) {
      .info_block {
        .info {
          // height: 70%;

          h1 {
            font-size: 2.1rem;
            line-height: 2.6rem;
          }

          &-2 {
            h6 {
              font-size: 1rem;
            }

            p {
              font-size: 0.8rem;
              line-height: 1.5rem;
            }
          }
        }
      }
    }

    @media (max-width: 568px) {
      .info_block {
        .info {
          &-2 {
            h1 {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 1091.95px) {
  #home_banner {
    height: auto;
    // min-height: auto;

    #carouselBannerFade,
    #carouselBannerFade2 {
      height: 65vh;
    }

    @media (max-width:568px) {

      #carouselBannerFade,
      #carouselBannerFade2 {
        height: 48vh;
      }
    }

    #carouselBannerFade2 {
      .line {
        height: 40%;
        top: 49%;
      }

      .carousel-control-prev {
        right: 94%;
      }

      .carousel-control-next {
        right: 94%;
      }
    }
  }
}
</style>
