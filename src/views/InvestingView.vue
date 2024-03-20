<script setup>
import { useRoute } from "vue-router";
import { onMounted, nextTick } from "vue";

import Form from "../components/Forms/Form.vue";
import FormInfo from "../components/Forms/FormInfo.vue";

const route = useRoute();
onMounted(() => {
  // console.log("route:", route.query);
  if (route.query?.jump) {
    setPosition(route.query.jump);
  }
});

/**
 * @description: 跳转到对应的div
 * @param {*} id
 * @return {*}
 */
const setPosition = (id) => {
  const el = document.getElementById(id);
  if (!el) {
    return;
  }
  nextTick(function () {
    window.scrollTo({ behavior: "smooth", top: el.offsetTop });
  });
};
</script>

<template>
  <div id="investing" class="service">
    <div class="banner position-relative">
      <!-- <div class="container-fluid p-0"> -->
      <img src="../assets/images/bg-img-05.png" class="" alt="" />
      <div class="banner-info position-absolute text-white text-center">
        <h1 class="text-linear-color">Investor</h1>
      </div>
      <!-- </div> -->
    </div>

    <div class="sections">
      <div class="section section-2" id="VanadiumMortgageFundBox">
        <div class="container">
          <div class="row">
            <div id="vanadiumMortgageFund" class="col-12 col-md-6 text-white d-flex align-content-between flex-wrap">
              <div>
                <h2 class="title text-linear-color">
                  Vanadium Mortgage Fund
                  <p class="sub-text">(open-end mortgage fund)</p>
                </h2>
                <p class="pe-md-5 pt-4">
                  Vanadium currently offers qualified wholesale investors<sup>3</sup> to
                  invest in its open-end mortgage fund with two different fixed
                  target return options. The fund provides investors exposure to
                  Vanadium's portfolio of risk adjusted well-structured loans
                  secured against Australian real estate assets. The investors
                  for Class A and Class B units is entitled to same ownership
                  rights, only difference between Class A and Class B is
                  investment duration and target return.
                </p>
              </div>

              <div>
                <h3 class="sub-title">1 Year Duration (Class A)</h3>
                <p class="pe-md-5">
                  Target Return: RBA Cash Rate + 3.5% p.a. (current rate 7.6%
                  p.a.) <sup>1</sup>
                  <!-- <span class="mark-position">
                    <span class="mark-comment">1</span>
                  </span> -->
                </p>
              </div>
              <div>
                <h3 class="sub-title">2 Year Duration (Class B)</h3>
                <p class="pe-md-5">
                  Target Return: RBA Cash Rate + 4.5% p.a. (current rate 8.6%
                  p.a.) <sup>1</sup>
                  <!-- <span class="mark-position">
                    <span class="mark-comment">1</span>
                  </span> -->
                </p>
                <p class="pe-md-5">
                  Investor's capital is protected by 10% first loss from
                  Vanadium's related parties. <sup>2</sup>
                </p>
              </div>
            </div>
            <div class="col-12 col-md-6 ps-md-5">
              <img src="../assets/images/investing-img-1.png" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>

      <div class="section section-3" id="VanadiumContributoryMortgageFundBox">
        <div class="container">
          <div class="row">
            <div id="VanadiumContributoryMortgageFund" class="col-12 col-md-6 pe-5">
              <img src="../assets/images/investing-img-3.png" alt="" width="100%" />
            </div>

            <div class="col-12 col-md-6 text-white">
              <div>
                <h2 class="title mt-xs-0 text-linear-color">
                  Vanadium Contributory Mortgage Fund
                </h2>
                <p class="py-3">
                  From time to time Vanadium Offers Contributory Mortgage fund
                  opportunities to its existing wholesale investors.
                  <sup>3</sup>The Contributory fund provides an opportunity to invest in a
                  mortgage investments that match investor's personal risk and
                  return appetite. Investors set their own risk parameters and
                  are able to focus on any preferred asset classes, geographic
                  areas or investment tenor.
                </p>
              </div>

              <div>
                <!-- <h3 class="sub-title">1 Year Duration (Class A)*</h3> -->
                <p class="">
                  Return of Contributory Mortgage Fund will be case by case
                  subject to the project
                </p>
              </div>
              <!-- <div>
                <h3 class="sub-title">2 Year Duration (Class B)**</h3>
                <p class="pe-md-5">
                  Target Return: RBA Cash Rate + 4.5% p.a. (current rate 8.6%
                  p.a.)*
                </p>
                <p class="pe-md-5">
                  Investor's capital is protected by 10% first loss from
                  Vanadium's related parties.
                </p>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <div class="section section-4">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center text-white mb-5">
              <h2 class="mb-3 text-linear-color">
                Who Can Invest in Vanadium Funds?
              </h2>
              <p class="text-center">
                Our investments are only open to wholesale investors<sup>3</sup> seeking
                risk-mitigated investment opportunities with stable returns
                backed by Australian Real Estate Assets.
              </p>
            </div>
            <div class="col-12 col-lg-2"></div>
            <div class="col-12 col-sm-6 col-lg-2 text-white text-center mb-3">
              <div>
                <img src="../assets/images/icons/vanadium-icon-3.png" alt="" />
                <p class="text-center mt-3">High Net Worth Individuals</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-2 text-white text-center mb-3">
              <div>
                <img src="../assets/images/icons/vanadium-icon-4.png" alt="" />
                <p class="text-center mt-3">Self Managed Super Fund</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-2 text-white text-center mb-3">
              <div>
                <img src="../assets/images/icons/vanadium-icon-5.png" alt="" />
                <p class="text-center mt-3">Family Offices</p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-2 text-white text-center mb-3">
              <div>
                <img src="../assets/images/icons/vanadium-icon-6.png" alt="" />
                <p class="text-center mt-3">Investment Managers</p>
              </div>
            </div>
            <div class="col-12 col-lg-2"></div>
          </div>
        </div>
      </div>

      <div class="section section-5">
        <div class="container">
          <div class="row">
            <div class="text-white py-5">
              <p class="fs-6">
                Please contact us for more information about our investment
                opportunities, the target returns and products advertised on
                this website is subject to change. Please refer to investment
                product's information memorandum for full and up-to-date
                details.
              </p>
              <p class="fw_3">
                <!-- <span class="mark-comment">1</span> -->
                <sup>1</sup> The target return is not a
                forecast and is not guaranteed. The actual total return may rise
                and fall. Please refer to IM for full details.
              </p>
              <p class="fw_3">
                <!-- <span class="mark-comment">2</span> -->
                <sup>2</sup>
                Vanadium proposes to invest
                or procure investments from its related parties in a Class of
                Units designed to underwrite an amount for each loan equal to
                10% of the amount being allocated from investments made for
                Class A and B Units. The return of this investment will be
                subordinate to the return of the investments made for Class A
                and B Units and is designed to decrease the risk that any losses
                may impact the return available for investors in Class A and B
                Units.
              </p>
              <p class="fw_3">
                <!-- <span class="mark-comment">3</span> -->
                <sup>3</sup> The term “Wholesale
                Investor” is defined in the Corporations Act, the FMCA (NZ) or
                equivalent legislation in Hong Kong and Singapore.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="section section-6 py-5">
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
#investing {
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
      object-position: bottom;
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
        line-height: 1.75rem;
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

    .fw_3 {
      font-weight: 300;

      .mark-comment {
        width: 20px;
        height: 20px;
        // border-radius: 50%;
        // border: 1px solid #fff;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transform: scale(0.5, 0.5);
        font-size: 1.5rem;
        font-weight: 600;
      }
    }

    .sub-title {
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 1.5rem;
      color: #fff;
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

      img {
        height: 100%;
        width: 100%;
      }

      .title {
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 600;
        line-height: 3.4rem;

      }

      .sub-text {
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      p {
        font-size: 1rem;
        text-align: justify;
        line-height: 1.75rem;
      }

      &-2 {
        padding: 8rem 1rem;

        @media (max-width: 768px) {
          padding: 3rem 1rem;
        }
      }

      &-3 {
        padding: 5rem 1rem;
        background: url("../assets/images/services-bg-2.png") 100% / cover no-repeat;
      }

      &-4,
      &-5 {
        .title {
          font-size: 1.5rem;
          font-weight: 500;
          line-height: 1.75rem;
          color: #fff;
        }
      }

      &-4 {
        padding: 6rem 2rem;
        background: url("../assets/images/vanadium-bg-3.png") 100% / cover no-repeat;

        img {
          width: 100px;
          text-align: center;
        }
      }

      &-5 {
        padding: 6rem 2rem;
      }

      &-6 {
        background: url("../assets/images/contact-bg.png");
      }
    }

    .mark-position {
      position: relative;
      display: inline-block;
      width: 8px;
      height: 14px;
      // background-color: #fff;

      .mark-comment {
        width: 20px;
        height: 20px;
        // border-radius: 50%;
        // border: 1px solid #fff;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        transform: scale(0.5, 0.5);
        position: absolute;
        top: -6px;
        left: -5px;
        font-size: 1.5rem;
        font-weight: 600;
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
