<template lang="html">
  <div class="create-an-account">
    <h1>Create an Account</h1>
    <p class='desc first'>Checkout faster at Verdugo Gift Company and save multiple addresses in your address book.</p>
    <div class="main">
      <div class="personal">
        <h3 class='title'>Personal Details</h3>
        <p class='desc'>Enter your email address and password to create your account.</p>
        <p class='item'><span><i>*</i>Email address</span><input type="email" name="" value=""></p>
        <p class='item'><span><i>*</i>Password</span><input type="password" name="" value=""></p>
        <p class='item'><span><i>*</i>Confirm Password</span><input type="password" name="" value=""></p>
      </div>
      <i class='line'></i>
      <div class="shipping-details">
        <h3 class='title'>Shipping Details</h3>
        <p class='desc'>Enter the name and address you'd like us to ship your order to.</p>
        <p class='item'><span><i>*</i>First Name</span><input type="text" name="" value=""></p>
        <p class='item'><span><i>*</i>Last Name</span><input type="text" name="" value=""></p>
        <p class='item'><span>Company Name</span><input type="text" name="" value=""></p>
        <p class='item'><span><i>*</i>Phone Number</span><input type="tel" name="" value=""></p>
        <p class='item'><span><i>*</i>Address Line 1</span><input type="text" name="" value=""></p>
        <p class='item'><span>Address Line 2</span><input type="text" name="" value=""></p>
        <p class='item'><span><i>*</i>Suburb/City</span><input type="text" name="" value=""></p>

        <p class='item'><span><i>*</i>Country</span><input type="text" name="" value=""></p>
        <p class='item'><span><i>*</i>State/Province</span><input type="text" name="" value=""></p>
        <p class='item'><span><i>*</i>Zip/Postcode</span><input type="text" name="" value=""></p>
      </div>
      <i class='bottom-line'></i>
    </div>
    <div class="button-list">
      <button type="button" name="button">Create My Account</button>
      <router-link tag='span' to="/">Return to store</router-link>
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
    i {
        color: red;
    }
    h1 {
        @extend .h1-style;
    }
    .title {
        color: #333;
        font-weight: 600;
        font-size: 13px;
    }
    .desc {
        font-size: 10px;
        color: #323433;
        margin: 16px 0;
    }
    .first {}
    .item {
        // border: 1px solid red;
        display: flex;
        justify-content: flex-end;
        margin-top: 15px;
        span:nth-of-type(1) {
            width: 25%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-right: 30px;
            // border: 1px solid blue;
        }
        input {
            border: 1px solid $gray-border;
            color: $gray-bottom-color;
            width: 100px;
            height: 20px;
        }
    }

    .main {
        .personal {
            width: 50%;
        }
        .line {
            display: block;
            width: 100%;
            border-top: 1px solid $gray-border;
            margin: 50px 0;
        }
        .shipping-details {
            margin-top: 20px;
            width: 50%;
        }
        .bottom-line {
            display: block;
            width: 100%;
            margin-top: 50px;
            border-top: 1px solid $gray-border;
        }
    }
    .button-list {
        display: flex;
        align-items: center;
        margin-top: 10px;
        button {
            @extend .button-style-white;
            padding: 8px;
            margin-right: 6px;
            &:hover {
                background-color: #7082b3;
                color: white;
            }
        }
        span {
            cursor: pointer;
            &:hover {
                opacity: 0.7;
            }
        }
    }
}
</style>
