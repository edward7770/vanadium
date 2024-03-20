<script setup></script>

<template>
  <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link rounded-0 d-flex justify-content-between align-items-center active" id="pills-home-tab"
        data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
        aria-selected="true">INVESTMENT ANALYSIS</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link rounded-0 d-flex justify-content-between align-items-center" id="pills-profile-tab"
        data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
        aria-selected="false">SECURITY POSITION AND SETTLEMENT PROCESS</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link rounded-0 d-flex justify-content-between align-items-center" id="pills-contact-tab"
        data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
        aria-selected="false">POST INVESTMENT MONITORING</button>
    </li>
  </ul>
  <div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
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
        Investment Committee will also consider:
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
        The Investment Committee will also have the ability to
        review and change the terms, conditions and pricing of any
        proposed transaction.
      </p>
    </div>
    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
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
        settlement System allows the land and related transaction
        to settle real-time which means lender’s mortgage will be
        registered on title as soon as the money is lent, and no
        lender (unless it’s a second mortgage transaction) may
        have any priority claim than the Fund.
      </p>
    </div>
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
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
        <li>ecommend and implement any appropriate investment
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
</template>

<style scoped>
.nav-pills {
  height: 100%;
  opacity: 0.5;
  background: #000;

  .nav-item {
    width: 33%;
    overflow: hidden;
  }

  .nav-link {
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    padding: 5%;
    height: 100%;
    line-height: 1.3rem;
    text-align: left;

    &.active {
      opacity: 1;
      background: #ffffff;
      color: #333;
    }
  }
}

.tab-content {
  background: rgba(62, 60, 60, 0.5);
  padding: 5%;
  text-align: left;

  ul {
    li {
      line-height: 1.75rem;
      text-align: left !important;
    }
  }
}
</style>
