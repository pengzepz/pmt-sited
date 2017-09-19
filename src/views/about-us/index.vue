<template lang="html">
  <div class="about-us">
    <h1 class='title'>About Us</h1>
    <p class='desc'>Verdugo Gift Company is committed to providing our customers with the best <br />customer service in the industry, timely order delivery and competitive pricing.</p>
    <div class="line">
      <img src="../../assets/img/bowline.png" alt="">
    </div>
    <div class="main">
      <div class="left-img">
        <img src="../../assets/img/gnome.png" alt="">
      </div>
      <div class="right-content">
        <p>Verdugo Gift Company is committed to providing you, our customer, with <span>world-class customer service</span>, <span>affordable prices</span>, and <span>timely delivery</span> of your order.</p>
        <div class="bottom-contains">
          <img src="../../assets/img/badge.png" alt="">
          <p>We back all of our products with our "No Hassle" money back guarantee, you must be completely satisfied with the product(s) you recieve or your money back, it truly is that simple.</p>
        </div>
        <p class="about-lower-text">      Our philosophy is simple to understand, we must provide our customers with superior service in order to retain them as faithful customers. Simply put, if our customers are happy, our business can succeed, and if our customers are unhappy, our business cannot succeed. Everyone within our organization believes strongly in this philosophy.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.about-us {
    h1 {
        @extend .h1-style;
    }
    .desc,
    .line {
        width: 80%;
        margin: 1% auto;
        text-align: center;
    }
    .desc {
        font-size: 14px;
        color: #0990d0;
        font-style: italic;
    }
    .main {
        display: flex;
        width: 80%;
        height: 10rem;
        margin: 1rem auto;
        justify-content: space-between;
        // border: 1px solid red;
        .right-content {
            display: flex;
            flex-flow: column;
            justify-content: space-around;
            p:nth-of-type(1) {
                font-size: 9px;
                span {
                    font-size: 12px;
                    color: #233874;
                    font-weight: 600;
                }
            }
            .bottom-contains {
                display: flex;
                justify-content: space-around;
                p:nth-of-type(1) {
                    width: 60%;
                    font-size: 13px;
                    color: #907e68;
                    font-weight: 300;
                    border-left: 6px solid #907e68;
                    padding-left: 0.1rem;
                    text-align: justify;
                }
            }
            .about-lower-text {
                text-align: justify;
                font-size: 9px;
                font-weight: 300;
                line-height: 15px;
            }
        }
    }
}
</style>
