
<script>
import emailjs from '@emailjs/browser';

// emailjs.init('HXYXfxoR9u1UvlVh8')
// window.addEventListener("load", (event) => {
//   const btn = document.getElementById('button');

//   document.getElementById('myForm')
//     .addEventListener('submit', function (event) {
//       event.preventDefault();

//       btn.value = 'Sending...';
//       const serviceID = 'service_78tncwn';
//       const templateID = 'template_8tuaoao';

//       emailjs.sendForm(serviceID, templateID, this)
//         .then(() => {
//           btn.value = 'Send Email';
//           alert('Sent!');
//         }, (err) => {
//           btn.value = 'Send Email';
//           alert(JSON.stringify(err));
//         });
//     });

// });

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_78tncwn', 'template_8tuaoao', this.$refs.form, 'HXYXfxoR9u1UvlVh8')
        .then((result) => {
            alert('Email sent successfully ')
            console.log('SUCCESS!', result.text);
            
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}

</script>


<template>
  <div class="text-white">
    <!-- <form id="myForm" class="row g-3 needs-validation form" novalidate ref="form" @submit.prevent="sendMail"> -->
    <form id="myForm" class="row g-3 needs-validation form" ref="form" @submit.prevent="sendEmail">
      <div class="col-md-6 py-2 pe-4">
        <!-- <label for="firstName" class="form-label">First name</label> -->
        <input type="text" class="form-control bg-transparent rounded-0" id="firstName" name="firstName"
          placeholder="First name*" value="" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>
      <div class="col-md-6 py-2 pe-4">
        <!-- <label for="lastName" class="form-label">Last name</label> -->
        <input type="text" class="form-control bg-transparent rounded-0" id="lastName" name="lastName"
          placeholder="Last name*" value="" required>
        <div class="valid-feedback">
          Looks good!
        </div>
      </div>

      <div class="col-md-6 py-2 pe-4">
        <!-- <label for="phone" class="form-label">Phone*</label> -->
        <input type="ph" class="form-control bg-transparent rounded-0" id="phone" name="phone" placeholder="Phone*"
          required>
      </div>

      <div class="col-md-6 py-2 pe-4">
        <!-- <label for="email" class="form-label">Email address</label> -->
        <input type="email" class="form-control bg-transparent rounded-0" id="email" name="email" placeholder="Email*"
          required>
      </div>

      <div class="col-12 py-2 pe-4">
        <textarea class="form-control bg-transparent rounded-0" placeholder="Message..." id="message"
          name="message"></textarea>
      </div>

      <div class="col-12 py-2 pe-4">
        <button id="button" class="btn bt-style-1 text-white rounded-0" type="submit">Send</button>
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
#myForm {

  input,
  textarea {
    border: 1px solid #896842;
    padding: 1rem;
    color: #fff;

    &::placeholder {
      color: #898989;
      opacity: 1;
    }
  }

  textarea {
    height: 10rem;
  }

  .bt-style-1 {
    font-size: 1.5rem;
    padding: 0.5rem 3rem !important;
    line-height: 1.75rem;

  }
}
</style>
