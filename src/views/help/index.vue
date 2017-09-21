<template lang="html">
  <div class="help">
    <img src="../../assets/img/contemporary-furniture-pillows.jpg" alt="" class='left-img'>
    <div class="right-content">
      <h1>We are Happy to Help!</h1>
      <p class='desc'>Our philosophy is simple to understand, we must provide our customers with superior service in order to retain them as faithful customers</p>
      <div class="item-list">
        <img src="../../assets/img/about-us-image.jpg" alt="About Us" @click='aboutUs()'>
        <img src="../../assets/img/contact-us-image.jpg" alt="Contact Us" @click='contactUs()'>
        <br />
        <img src="../../assets/img/shipping-returns-image.jpg" alt="Shipping & Returns" @click='shipping()'>
        <img src="../../assets/img/terms-conditions-image.jpg" alt="Terms & Conditions" @click='terms()'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    aboutUs() {
      this.$router.push({
        name: 'aboutUs'
      });
    },
    contactUs() {
      this.$router.push({
        name: 'contactUs'
      });
    },
    shipping() {
      this.$router.push({
        name: 'shipping'
      });
    },
    terms() {
      this.$router.push({
        name: 'terms'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.help {
    width: 75%;
    max-width: 700px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .right-content {
        width: 65%;
        display: flex;
        flex-flow: column;
        h1 {
            @extend .h1-style;
            text-align: left;
            margin-top: 0;
        }
        .desc {
            font-size: 13px;
            color: #848484;
            margin: 10px 0;
        }
        .item-list {
            img {
                margin: 6px 6px 0 0;
                cursor: pointer;
                &:hover {
                    box-shadow: 1px 1px 10px skyblue;
                }
            }
        }
    }
}
</style>
