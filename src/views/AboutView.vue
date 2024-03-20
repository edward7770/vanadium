<script setup>
import ProcessTabs from '../components/ProcessTabs.vue'
</script>
<template>
  <div id="about" class="about">
    <div class="banner">
      <div class="container-fluid p-0">
        <div id="about-banner-carousel" class="carousel slide" data-bs-ride="false">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#about-banner-carousel" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="buttonpm i vueperslidesn" data-bs-target="#about-banner-carousel" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#about-banner-carousel" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="../assets/images/about-banner.png" class="d-block w-100" alt="banner" />
            </div>
            <div class="carousel-item">
              <img src="../assets/images/about-banner.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="../assets/images/about-banner.png" class="d-block w-100" alt="..." />
            </div>
          </div>
          <div class="position-absolute title text-white">
            <h3>About us</h3>
            <h1 class="text-linear-color">
              Vanadium <br />
              Group
            </h1>
          </div>

          <!-- <button class="carousel-control-prev" type="button" data-bs-target="#about-banner-carousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#about-banner-carousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button> -->
        </div>
      </div>
    </div>

    <div class="sections">
      <div class="section section-1">
        <div class="title text-white text-center">
          <h3 class="">Our story</h3>
          <p class="divide divide-1 mb-5"></p>
          <h2 class="text-linear-color">
            Set Sail to Secure Your Financial Future
          </h2>
        </div>
      </div>

      <div class="section section-2">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-5 text-white">
              <h2 class="title text-linear-color">About Us</h2>
              <!-- <h6 class="pt-3">Work together, dream together.</h6> -->
              <p class="pe-md-5 pt-4">
                Vanadium is established by experienced property and finance
                professionals that have 80 years combined experiences in the
                local market. Vanadium engaged with industry leaders such as Dentons and AMAL Asset
                Management to ensure investor's assets are securely held. The
                fund assets will be held in a Unit Trust Structure and the Trust
                Deed is established by Dentons Australia. AMAL Asset Management
                is an Australian Leading Loan Management Service Provider,
                Trustee and Custodian. Vanadium Mortgage Fund (Open-end Fund) engage AMAL as the trustee of
                the fund and custodian of asset. When investor invest money into
                the fund, investor's money will be controlled by this
                third-party trustee and can't be access directly by the fund
                manager. The Trustee AMAL will act on the investor's behalf
                based on the Fund's Mandate and Fund Manager's advice to lend
                money to selected borrowers and complete loan settlement with
                fund's lawyer. AMAL as trustee for Vanadium Mortgage Fund will
                be listed as mortgagee on security property's title.
              </p>
            </div>
            <div class="col-12 col-md-7">
              <img src="../assets/images/about-img-1.png" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="section section-3">
        <div class="title text-white text-center">
          <h3 class="">Meet our team</h3>
          <p class="divide divide-2 mb-5"></p>
          <h2 class="text-linear-color">
            Work together, dream together. <span>OUR BEST IS YOUR BEST</span>
          </h2>
        </div>
      </div> -->

      <!-- display none -->
      <div class="section section-4 d-none">
        <div class="container">
          <div class="row">
            <div class="title text-linear-color pb-5">Our Leader Team</div>
            <div class="col-12 col-md-4 card bg-transparent rounded-0">
              <div class="img position-relative">
                <img src="../assets/images/Kevin-Zhang.jpeg" class="card-img-top rounded-0" alt="..." width="100%"
                  height="auto" />
                <div class="image_overlay position-absolute">
                  <p>
                    Mr. Kevin ZHANG is the Managing Director of Vanadium Fund Management. He has over 15 years’ experience
                    and knowledge in the financial sector and has serviced multiple international banks and financial
                    institutions such as MF Global Australia, Bank of China Sydney and Citibank Australia.
                  </p>
                </div>
              </div>
              <ul class="list-group rounded-0">
                <li class="list-group-item bg-transparent border-0 ps-0">
                  Kevin
                </li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">
                  Managing Director
                </li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">
                  0433 001 548
                </li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">
                  KevinZhang@vanadiumfunds.com.au
                </li>
              </ul>
            </div>
            <div class="col-12 col-md-4 card bg-transparent rounded-0">
              <div class="img position-relative">
                <img src="../assets/images/Chi-Wah-Chung.jpeg" class="card-img-top rounded-0" alt="..." width="100%"
                  height="auto" />
                <div class="image_overlay position-absolute">
                  <p>
                    Mr. Chung is the Executive Consultant of Vanadium Fund Management. He has more than 40 years’
                    experience and knowledge in the Hong Kong and Australia Banking and Finance industry having served as
                    Head of Treasury for Bank of East Asia Ltd., Hong Kong, Acting CEO and Director for Bank of China
                    (Australia) Ltd. and Assistant General Manager for Bank of China Ltd., Sydney Branch.
                  </p>
                </div>
              </div>
              <ul class="list-group rounded-0">
                <li class="list-group-item bg-transparent border-0 ps-0">
                  Chi Wah Chung
                </li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">
                  Executive Consultant
                </li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">
                  (02) 92839730
                </li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">
                  info@vanadiumfunds.com.au
                </li>
              </ul>
            </div>
            <!-- <div class="col-12 col-md-4 card bg-transparent rounded-0">
              <div class="img position-relative">
                <img src="../assets/images/service-img-2.png" class="card-img-top rounded-0" alt="..." width="100%"
                  height="auto" />
                <div class="image_overlay position-absolute">
                  <p>
                    After obtaining his Master's degree, Kevin joined Goldman
                    Sachs as a junior analyst. After five years of hard work, he
                    became a senior investment advisor for the team. In 2015, he
                    was promoted to investment manager and successfully managed
                    over 1 billion US dollars in assets within two years. In
                    2018, he shifted to private equity investment and joined the
                    renowned Sequoia Capital.
                  </p>
                </div>
              </div>
              <ul class="list-group rounded-0">
                <li class="list-group-item bg-transparent border-0 ps-0">
                  Kevin
                </li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">
                  AlBUSINESS DEVELOPMENT MANAGE
                </li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">
                  +61 453 934 932
                </li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">
                  alexwang@vanadium.com.au
                </li>
              </ul>
            </div> -->
          </div>
        </div>
      </div>

      <div class="section section-5">
        <!-- <div class="container">
          <div class="row">
            <div class="title text-white pb-5"> Our Sales Team </div>
            <div class="col-12 col-md-4 card bg-transparent rounded-0">
              <img src="../assets//images/service-img-2.png" class="card-img-top rounded-0" alt="..." width="100%"
                height="auto">
              <ul class="list-group rounded-0">
                <li class="list-group-item bg-transparent border-0 ps-0">Alex Wang</li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">AlBUSINESS DEVELOPMENT MANAGE</li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">+61 453 934 932</li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">alexwang@vanadium.com.au</li>
              </ul>
            </div>
            <div class="col-12 col-md-4 card bg-transparent rounded-0">
              <img src="../assets//images/service-img-2.png" class="card-img-top rounded-0" alt="..." width="100%"
                height="auto">
              <ul class="list-group rounded-0">
                <li class="list-group-item bg-transparent border-0 ps-0">Alex Wang</li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">AlBUSINESS DEVELOPMENT MANAGE</li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">+61 453 934 932</li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">alexwang@vanadium.com.au</li>
              </ul>
            </div>
            <div class="col-12 col-md-4 card bg-transparent rounded-0">
              <img src="../assets//images/service-img-2.png" class="card-img-top rounded-0" alt="..." width="100%"
                height="auto">
              <ul class="list-group rounded-0">
                <li class="list-group-item bg-transparent border-0 ps-0">Alex Wang</li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">AlBUSINESS DEVELOPMENT MANAGE</li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">+61 453 934 932</li>
                <li class="list-group-item bg-transparent border-0 text-white ps-0">alexwang@vanadium.com.au</li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>

      <div class="section section-6">
        <div class="title text-white text-center">
          <h3 class="text-linear-color">Investment Process</h3>
          <p class="divide divide-3 mb-5"></p>
          <h5 class="m-auto" style="width: 60%;">
            Vanadium implements a consistent approach to
            investment due diligence, including a detailed and thorough analysis
            of each transaction.
          </h5>

          <!-- Desk -->
          <div class="container py-5 d-none d-md-block">
            <div class="row">
              <div class="d-flex align-items-start-md">
                <div class="nav flex-column nav-pills col-4 col-md-3" id="v-pills-tab" role="tablist"
                  aria-orientation="vertical">
                  <button class="nav-link rounded-0 active d-flex justify-content-between align-items-center"
                    id="v-pills-mission-tab" data-bs-toggle="pill" data-bs-target="#v-pills-mission" type="button"
                    role="tab" aria-controls="v-pills-mission" aria-selected="true">
                    INVESTMENT ANALYSIS<span>></span>
                  </button>
                  <button class="nav-link rounded-0 d-flex justify-content-between align-items-center"
                    id="v-pills-value-tab" data-bs-toggle="pill" data-bs-target="#v-pills-value" type="button" role="tab"
                    aria-controls="v-pills-value" aria-selected="false">
                    SECURITY POSITION AND SETTLEMENT PROCESS <span>></span>
                  </button>
                  <button class="nav-link rounded-0 d-flex justify-content-between align-items-center"
                    id="v-pills-culture-tab" data-bs-toggle="pill" data-bs-target="#v-pills-culture" type="button"
                    role="tab" aria-controls="v-pills-culture" aria-selected="false">
                    POST INVESTMENT MONITORING <span>></span>
                  </button>
                </div>

                <div class="tab-content col-8 col-md-9" id="v-pills-tabContent">
                  <div class="tab-pane fade show active" id="v-pills-mission" role="tabpanel"
                    aria-labelledby="v-pills-mission-tab" tabindex="0">
                    <p>
                      Transactions are initially screened by lending managers
                      from Vanadium Fund Management. Transactions are then
                      submitted to the Fund’s Investment Committee, where a
                      unanimous resolution is required for a transaction to be
                      approved for investment by the Fund.
                    </p>
                    <p>
                      The Investment Committee considers a range of matters,
                      including the appropriateness of an investment, its
                      compliance with the mandated investment strategy, and
                      return expectations. As part of their approval, the
                      Investment Committee may also consider:
                    </p>
                    <ul class="mt-3">
                      <li>impact of the investment on portfolio returns;</li>
                      <li>capital availability within the Fund, including the
                        amount and timing of any future funding requirements;</li>
                      <li>risk profile of the proposed transaction;</li>
                      <li>timing impacts of the investment in context of the
                        overall fund term;</li>
                      <li>consistency of the investment opportunity with the
                        Manager’s market and economic outlook;</li>
                      <li>consistency with the Fund’s mandated investment
                        strategy.</li>
                    </ul>

                    <p>
                      The Investment Committee will also have the authority to
                      review and change the terms, conditions and pricing of any
                      proposed transaction.
                    </p>
                  </div>
                  <div class="tab-pane fade" id="v-pills-value" role="tabpanel" aria-labelledby="v-pills-value-tab"
                    tabindex="0">
                    <p>
                      After Transaction is assessed and approved by the
                      Investment Committee. The Fund Manager will engage with an
                      external Lawyer to complete a set of legal documents which
                      form a Loan and Security Package. The package usually
                      includes,
                    </p>

                    <ul class="mt-3">
                      <li>Loan Agreement with the Borrower;</li>
                      <li>National Mortgage Form (To be Registered at Settlement);</li>
                      <li>Guarantee Agreement (if apply);</li>
                      <li>Guarantor’s legal and financial advice (if not waived).</li>
                    </ul>
                    <p>
                      At or before loan settlement, Fund’s lawyer will register
                      the signed National Mortgage Form with Government backed
                      Land Registry Services and lender’s interest will be
                      recorded on the Land Title Deed. Australia’s PEXA
                      settlement System allows the land and property transaction
                      to settle real-time which means lender’s mortgage will be
                      registered on title as soon as the money is lent, and no
                      lender (unless it’s a second mortgage transaction) may
                      have any priority claim than the Fund.
                    </p>
                  </div>
                  <div class="tab-pane fade" id="v-pills-culture" role="tabpanel" aria-labelledby="v-pills-culture-tab"
                    tabindex="0">
                    <p>
                      Vanadium continues to monitor the investment portfolio,
                      applying its understanding of both the market and the
                      underlying property in order to mitigate potential risks
                      to ensure successful project delivery. In particular,
                      Vanadium will:
                    </p>
                    <ul class="mt-3">
                      <li>perform periodic reviews of the investment portfolio
                        against performance expectations and risk metrics;</li>
                      <li>undertake regular communications with borrowers and
                        other key stakeholders;</li>
                      <li>monitor key deliverables and assessment of compliance
                        with specific investment milestones;</li>
                      <li>recommend and implement any appropriate investment
                        management actions;</li>
                      <li>recommend strategies for recovering assets and enforcing
                        securities in the event of loan defaults.</li>
                    </ul>
                    <p>
                      Vanadium performs a continual oversight and review
                      function to ensure consistent investment monitoring and
                      adherence to overall mandated fund strategy and investment
                      thesis. In the event of default and collection, because
                      the lender is the registered mortgagee of the security
                      property, it has the right to exercise “Mortgagee in
                      Possession”, which allows the lender to step in, lockup
                      the security asset and sell on behalf of the borrower to
                      recover the lender’s money. Fund will only suffer loss if
                      the security property can’t be sold for more than the
                      principal plus interest and recovery cost (legal fee and
                      receiver’s fee).
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- Mobile -->
          <div class="container py-5 d-block d-md-none">
            <ProcessTabs />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped lang="scss">
#about {
  #about-banner-carousel {
    height: 80vh;
    overflow: hidden;

    @media (max-width: 768px) {
      height: 35vh;
    }

    .carousel-inner {
      height: inherit;

      .carousel-item {
        height: inherit;

        img {
          height: inherit;
          object-fit: cover;
        }
      }
    }

    .title {
      top: 50%;
      left: 15%;
      transform: translate(0%, -50%);

      h3 {
        font-size: 1.3rem;
        font-weight: 500;
      }

      h1 {
        font-size: 6rem;
        font-weight: 700;
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

    .divide {
      width: 5.75rem;
      height: 0.0625rem;
      background: #fff;
      margin: auto;

      &-1 {
        width: 5.75rem;
      }

      &-2 {
        width: 9rem;
      }

      &-3 {
        width: 8.5rem;
      }
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
        object-fit: cover;
      }

      &-1 {
        padding: 5rem 2rem;

        h2 {
          font-size: 2.5rem;
          font-style: normal;
          font-weight: 400;
          line-height: 101.5%;
          padding-top: 2rem;

        }
      }

      &-3 {
        h2 {
          font-size: 1.8rem;
          font-style: normal;
          font-weight: 400;
          line-height: 101.5%;

          span {
            font-weight: 500;
          }
        }
      }

      &-2 {
        p {
          text-align: justify;
        }

        .title {
          font-size: 2.25rem;
          font-style: normal;
          font-weight: 500;
          line-height: 101.5%;
        }

        h6 {
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 500;
          line-height: 101.5%;
        }
      }

      &-4 {
        .img {
          width: 100%;
          height: 100%;

          .image_overlay {
            opacity: 0;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 1.5rem;
            color: #fff;
            background: linear-gradient(0deg,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0.5) 100%);

            &:hover {
              cursor: pointer;
              opacity: 1;
              transition: 0.3s;
            }
          }
        }
      }

      &-4,
      &-5 {
        .title {
          font-size: 2rem;
          font-style: normal;
          font-weight: 500;
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

      &-6 {
        .title h3 {
          font-size: 2.25rem;
          font-style: normal;
          font-weight: 500;
          line-height: 101.5%;
        }

        .nav-pills {
          height: 100%;
          opacity: 0.5;
          background: #000;
        }

        .tab-content {
          background: rgba(62, 60, 60, 0.5);
          padding: 5%;
          text-align: left;

          p {
            margin-bottom: 0;
          }

          ul {
            li {
              line-height: 1.75rem;
            }
          }
        }

        .nav-pills .nav-link {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 8%;
          height: 33.3%;
          line-height: 1.5rem;
          text-align: left;

          &.active {
            opacity: 1;
            background: #ffffff;
            color: #333;
          }
        }
      }

      @media (max-width: 568px) {
        .nav-pills .nav-link {
          padding: 3%;
          font-size: 1.2rem;
        }
      }
    }
  }
}</style>
