<script setup>
import Form from "../components/Forms/Form.vue";
import FormInfo from "../components/Forms/FormInfo.vue";
</script>

<template>
  <div id="borrowing" class="service">
    <div class="banner position-relative">
      <!-- <div class="container-fluid p-0"> -->
      <img src="../assets/images/borrowing-banner.png" class="" alt="" />
      <div class="banner-info position-absolute text-white text-center">
        <h1 class="text-linear-color">Borrower</h1>
      </div>
      <!-- </div> -->
    </div>

    <div class="sections">
      <div id="borrow_1" class="section section-2">
        <div class="container">
          <div class="row">
            <div
              class="col-12 col-md-6 text-white align-content-between flex-wrap"
            >
              <h2 class="title text-linear-color">Borrow with US</h2>
              <p class="pe-md-5 pt-md-4">
                Vanadium only lends against Australian real estate properties with
                registered mortgages. Vanadium offers wide range of debt
                solutions (except construction facility) that can be customised
                for every property owner. Please contact us for an indicative
                pricing and leverage.
              </p>
            </div>
            <div class="col-12 col-md-6 ps-md-5">
              <img
                src="../assets/images/borrowing-img-1.png"
                alt=""
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="borrow_2" class="section section-3">
        <div class="container">
          <div class="row text-white pb-5">
            <div class="title text-linear-color p-0 py-3">Residential loan</div>
            <div class="col-12 col-md-3 p-0">
              <img src="../assets/images/borrowor-img-1.png" alt="" />
            </div>
            <div
              class="col-12 col-md-9 bg_gray justify-content-center p-3 p-md-5"
            >
              <div class="align-self-center px-md-5">
                <!-- <div class="sub-title pb-2">Description</div> -->
                <p>
                  Vanadium lends against residential properties situated in Metro
                  Area of Capital Cities of Australian States and Territories
                  except Northern Territory, and Major Regional Centres in NSW, and QLD
                  and VIC for business purposes.
                </p>
                <div class="sub-title pb-2 pt-2">Features</div>
                <!-- <ul class="list-group list-group-horizontal-md flex-fill"> -->
                <ul class="list-group list-group-horizontal-md">
                  <li class="">Unlimited Cash Out</li>
                  <li class="">First and Second Mortgage</li>
                  <li class="">Bridging</li>
                </ul>
                <ul class="list-group list-group-horizontal-md">
                  <li class="">Up to 2 Year Maximum Term</li>
                  <li class="">
                    Settle in 5 Business Days (subject to satisfaction of Lender's conditions)
                  </li>
                  <li style="color: transparent;"></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row text-white pb-5">
            <div class="title text-linear-color p-0 py-3">Land loan</div>
            <div class="col-12 col-md-3 p-0">
              <img src="../assets/images/borrowor-img-2.png" alt="" />
            </div>
            <div
              class="col-12 col-md-9 bg_gray justify-content-center p-3 p-md-5"
            >
              <div class="align-self-center px-md-5">
                <!-- <div class="sub-title pb-2">Description</div> -->
                <p>
                  Vanadium lends against wide range of future development sites
                  situated in Metro Area of Capital Cities. This includes,
                  Future development site for residential properties and
                  commercial properties with or without a development approval.
                </p>
                <div class="sub-title pb-2 pt-2">Features</div>
                <ul class="list-group list-group-horizontal-md">
                  <li class="">Unlimited Cash Out</li>
                  <li class="">Competitive Rate</li>
                  <li class="">Flexible covenants</li>
                </ul>
                <ul class="list-group list-group-horizontal-md">
                  <li class="">Up to 1 Year Maximum Term</li>
                  <li class="">Bridging</li>
                  <li class="">First Mortgage Only</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="row text-white pb-5">
            <div class="title text-linear-color p-0 py-3">Commercial loan</div>
            <div class="col-12 col-md-3 p-0">
              <img src="../assets/images/borrowor-img-3.png" alt="" />
            </div>
            <div
              class="col-12 col-md-9 bg_gray justify-content-center p-3 p-md-5"
            >
              <div class="align-self-center px-md-5">
                <!-- <div class="sub-title pb-2">Description</div> -->
                <p>
                  Vanadium lends against wide range of commercial properties
                  situated in Metro Area of Capital Cities. This includes,
                  offices, retail shops, industrial and logistic properties and
                  hotels. Valuation will only be assessed at property value
                  without business value.
                </p>
                <div class="sub-title pb-2 pt-2">Features</div>
                <ul class="list-group list-group-horizontal-md">
                  <li class="">Unlimited Cash Out</li>
                  <li class="">No Occupancy Requirement</li>
                  <li class="">Competitive Rate</li>
                </ul>
                <ul class="list-group list-group-horizontal-md">
                  <li class="">Bridging</li>
                  <li class="">Up to 2 Year Maximum Term</li>
                  <li class="">First and Second Mortgage</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- <div class="row text-white pb-5">
            <div class="title p-0 py-3"> Advisory </div>
            <div class="col-12 col-md-3 p-0"><img src="../assets/images/borrowing-img-5.png" alt=""></div>
            <div class="col-12 col-md-9 bg_gray justify-content-center p-3 p-md-5">
              <div class="align-self-center px-md-5">
                <div class="sub-title pb-2">Description</div>
                <p> Descriptionat mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. Vivamus viverra
                  ante turpis, dignissim Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo
                  consecteCras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consecte </p>
                <div class="sub-title pb-2">Features</div>
                <ul class="list-group list-group-horizontal-md flex-fill">
                  <li>Descriptionat mi tristique rhoncus.</li>
                  <li>Descriptionat mi tristique rhoncus.</li>
                  <li>Descriptionat mi tristique rhoncus.</li>
                </ul>
              </div>
            </div>
          </div> -->
        </div>
      </div>

      <div class="section section-4 mb-5">
        <div class="container">
          <div class="row">
            <div class="text-white pb-5">
              <h1 class="title text-linear-color">Past Projects</h1>
            </div>
            <div class="col-12 col-md-4 pb-5">
              <div class="card rounded-0 border-0 bg-transparent">
                <img
                  src="../assets/images/borrowing-img-6.png"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <div class="card-body text-white px-0">
                  <h5 class="card-title pt-3">Castle Hill</h5>
                  <h6 class="card-title-sub">
                    70% LVR (Gross Realisation excluding GST)
                  </h6>
                  <p class="card-text">
                    Vanadium Financed a $11.6m first mortgage residential
                    residual stock loan at Castle Hill. The loan is a 12-month
                    facility to refinance the existing Bank Loan and provide
                    cash out for borrower's group cashflow. Interest were fully
                    prepaid at settlement.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 pb-5">
              <div class="card rounded-0 border-0 bg-transparent">
                <img
                  src="../assets/images/borrowing-img-7.png"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <div class="card-body text-white px-0">
                  <h5 class="card-title pt-3">Bondi Beach</h5>
                  <h6 class="card-title-sub">
                    70% LVR (Gross Realisation excluding GST)
                  </h6>
                  <p class="card-text">
                    Vanadium Financed a $3.3m second mortgage residential
                    residual stock loan at Bondi Beach. The first mortgage is
                    with one of the major banks. The purpose is cashout to
                    support borrower's group cashflow. The loan is a 6-month
                    facility with 2 month minimum term. Borrower repaid in month
                    3 without any early repayment fee.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 pb-5">
              <div class="card rounded-0 border-0 bg-transparent">
                <img
                  src="../assets/images/borrowing-img-8.png"
                  class="card-img-top rounded-0"
                  alt="..."
                />
                <div class="card-body text-white px-0">
                  <h5 class="card-title pt-3">Melbourne East</h5>
                  <h6 class="card-title-sub">60% LVR</h6>
                  <p class="card-text">
                    Vanadium Financed a $2.6m first mortgage land loan at
                    Melbourne East growth corridor location. The property was
                    unencumbered before funding, and loan purpose is provide
                    cashout to support borrower's group cashflow. The loan is a
                    6-month facility with 3 month minimum term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Form area -->
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

        @media (max-width: 768px) {
          padding: 3rem 1rem;
        }

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

        p, li {
          font-size: 1rem;
          line-height: 1.5rem;
        }

        li {
          margin-left: 1.3rem;
          padding: 0.5rem;


          @media (max-width: 768px) {
            width: 100%;
          }
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

    @media (max-width: 768px) {
    .section {
      .title {
        font-size: 2.2rem !important;
        line-height: 2.8rem !important;
      }
    }
  }
  }
}
</style>
