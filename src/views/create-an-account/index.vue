<template lang="html">
  <div class="create-an-account">
    <h1>Create an Account</h1>
    <p class='desc first'>Checkout faster at Verdugo Gift Company and save multiple addresses in your address book.</p>
    <div class="main">
      <div class="personal">
        <h3 class='title'>Personal Details</h3>
        <p class='desc'>Enter your email address and password to create your account.</p>
      </div>

      <div class="shipping-details">
        <h3 class='title'>Shipping Details</h3>
        <p class='desc'>Enter the name and address you'd like us to ship your order to.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     dynamicValidateForm: {
  //       domains: [{
  //         value: ''
  //       }],
  //       email: '',
  //       password: '',
  //       confirmPassword: ''
  //     }
  //   };
  // },
  // methods: {
  //   submitForm(formName) {
  //     this.$refs[formName].validate((valid) => {
  //       if (valid) {
  //         alert('submit!');
  //       } else {
  //         console.log('error submit!!');
  //         return false;
  //       }
  //     });
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.create-an-account {
    width: 75%;
    max-width: 700px;
    margin: 0 auto;
    h1 {
        @extend .h1-style;
    }
    .title {
        color: #333;
        font-weight: bold;
        font-size: 13px;
    }
    .desc {
        font-size: 10px;
        color: #323433;
        font-weight: 550;
    }
    .first {
        margin: 16px 0;
    }
    .main {
        .personal {
            .desc {
                margin-top: 10px;
            }
            .form {
                width: 30%;
                margin-top: 20px;
            }
        }
    }
}
</style>
