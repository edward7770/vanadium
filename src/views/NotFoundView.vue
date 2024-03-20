<script setup>

</script>

<template>
  <div id="borrowing" class="service">
    <div class="banner position-relative">
      <!-- <div class="container-fluid p-0"> -->
      <img src="../assets/images/borrowing-banner.png" class="" alt="" />
      <div class="banner-info position-absolute text-white text-center">
        <h1 class="text-linear-color">Page Not Found</h1>
      </div>
      <!-- </div> -->
    </div>

    <div class="sections">
      <div id="borrow_1" class="section section-2">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-8 text-white align-content-between flex-wrap">
              <h2 class="title text-linear-color">404 Page Not Found</h2>
              <p class="pe-5 pt-4">
                <RouterLink to="/">Not Found anything</RouterLink>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<style scoped lang="scss">
#borrowing {
  .bg_gray {
    background: rgba(183, 183, 183, 0.1);
  }

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
        padding: 6rem 1rem 2rem 1rem;

        p {
          text-align: justify;
        }

        .title {
          font-size: 2.25rem;
          font-style: normal;
          font-weight: 700;
          line-height: 2.8rem;
        }

        h6 {
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 500;
          line-height: 101.5%;
        }
      }

      &-3 {
        padding: 3rem 1rem;

        // background: url('../assets/images/services-bg-2.png');
        .title {
          font-size: 1.8rem;
        }

        .sub-title {
          font-size: 1.2rem;
          font-weight: 500;
        }

        p,
        li {
          font-size: 1rem;
          line-height: 1.5rem;
        }

        li {
          margin-left: 1.3rem;
          padding: 0.5rem;
          width: 33.3%;
        }
      }

      &-4,
      &-5 {
        .title {
          font-size: 2.8rem;
          font-style: normal;
          font-weight: 700;
          // line-height: 1.75rem;
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

      &-4 {
        .card-title {
          font-size: 1.8rem;
          font-weight: 600;
        }

        .card-title-sub {
          font-size: 1.05rem;
        }

        .card-text {
          font-size: 0.8rem;
          line-height: 1.5rem;
        }
      }

      &-5 {
        background: url("../assets/images/contact-bg.png");
      }
    }
  }
}
</style>
