<template>
  <div id="secOneCarousel" class="carousel slide" data-bs-ride="false">
    <div class="container">
      <div class="row">
        <div class="col col-lg-6 left-side">
          <div class="row">
            <div class="col-5">
              <img src="../../assets/images/icons/icon-2.png" alt="" />
            </div>
            <div class="col-7 text-end">
              <!-- <span>mi tristique rhoncus. Etiam dapibus rutrum leo consect</span> -->
            </div>
          </div>
          <div class="col-12 pt-5 pb-3">
            <h4>Who we are?</h4>
            <h1>Vanadium</h1>
          </div>
          <div class="col-12 d-flex justify-content-between pe-5">
            <div
              type="button"
              data-bs-target="#secOneCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            >
              01
            </div>
            <div
              type="button"
              data-bs-target="#secOneCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              02
            </div>
            <div
              type="button"
              data-bs-target="#secOneCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
              03
            </div>
          </div>
          <div class="col-12 carousel-indicators pt-1 pb-1 pe-5">
            <button
              type="button"
              data-bs-target="#secOneCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#secOneCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#secOneCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="col-12 d-flex justify-content-between pe-5">
            <div
              type="button"
              data-bs-target="#secOneCarousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            >
              Stable <br />
              Return
            </div>
            <div
              type="button"
              data-bs-target="#secOneCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              Capital <br />
              Preservation
            </div>
            <div
              type="button"
              data-bs-target="#secOneCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
              Fast and <br />Reliable
            </div>
          </div>
        </div>

        <div class="d-none d-lg-block col-lg-3 p-0">
          <img
            src="../../assets/images/image-2.png"
            alt=""
            width="100%"
            height="100%"
          />
        </div>

        <div class="col col-lg-3 d-flex align-items-center">
          <div class="carousel-inner right-side">
            <div class="carousel-item active">
              <!-- <img src="../../assets/images/vanadium-banner-img.png" class="d-block w-100" alt="..."> -->
              <div class="carousel-caption text-start">
                <h5 class="title">
                  Stable <br />
                  Return
                </h5>
                <p class="desc">
                  Vanadium aims to provide Investors with reasonably stable and
                  predictable income based on target fixed rates of return over
                  a set period on a quarterly basis, investing in loans.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <!-- <img src="../../assets/images/service-img-3.png" class="d-block w-100" alt="..."> -->
              <div class="carousel-caption text-start">
                <h5 class="title text-left">
                  Capital <br />
                  Preservation
                </h5>
                <p class="desc">
                  Vanadium only invest in loans that is secured by registered
                  mortgage with Capped LVR. Vanadium also provides 10% "equity
                  buffer" to mitigate against loss of capital.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <!-- <img src="../../assets/images/service-img-3.png" class="d-block w-100" alt="..."> -->
              <div class="carousel-caption text-start">
                <h5 class="title text-left">Fast and <br />Reliable</h5>
                <p class="desc">
                  Vanadium commits ourself to provide fast and reliable debt
                  solutions, the fund can settle a loan within 5 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#secOneCarousel {
  .left-side {
    padding: 8% 2% 5% 8%;

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

    @media (max-width: 568px) {
      h1 {
        font-size: 2.5rem;
      }

      h4 {
        font-size: 1.8rem;
      }
    }
  }

  .carousel-indicators {
    position: relative;
    margin: 0;
    padding: 0;
    height: 31px !important;

    button {
      width: 50%;
      margin: 0;
    }

    &:active {
      height: 10px;
    }
  }

  .carousel-item {
    // position: relative;
    padding-left: 1rem;
    .carousel-caption {
      position: relative;
      left: 0;
      bottom: 0;

      .title {
        font-size: 2rem;
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
</style>
