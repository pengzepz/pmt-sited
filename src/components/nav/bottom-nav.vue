<template lang="html">
  <div class="bottom-nav">
    <div class="wrap">
    <div class="newsletter">
      <p class='left-text'>
        <i class='iconfont icon-xin'></i>
        <span>Sign Up for Our Newsletter</span>
        <span>|</span>
        <span>Receive weekly coupons and promotions!</span>
      </p>
      <p class='right-input'>
        <input type="text" name="" value="" placeholder='Enter your Email Address'>
      </p>
    </div>
  </div>

    <div class="bottom-list">
      <div class="wrapper">
      <p class='li-1'>
        <span class='title'>company info</span>
        <span class='li-list'>
          <p class='left'>
            <span>about us</span>
            <span>contact us</span>
            <span>blog</span>
            <span>privacy policy</span>
          </p>
        <span class='right'>
          <span>product index</span>
          <span>catefory index</span>
          <span>shipping & returns</span>
        </span>

      </span>

      </p>
      <p class='li-2'>
        <span class='title'>my account</span>
        <span class='li-list'>
          <span class='left'>
            <span>login</span>
            <span>order status</span>
            <span>view cart</span>
            <span>wishlist</span>
          </span>
        <span class='right'>
          <span>terms & conditions</span>
          <span>help</span>
        </span>
        </span>


      </p>
      <p class='li-3'>
        <span class='title'>Connect with Us</span>
        <span class='icons'>
          <i class='iconfont icon-facebook2' style='color:#44609C'></i>
          <i class='iconfont icon-twitter1' style='color: #05aeef'></i>
          <i class='iconfont icon-pinterestpinterest31' style='color: #cd3841'></i>
        </span>
      </p>
      <p class='li-4'>
        <span class="top">
          <span class='title'>Our Location</span>
          <span class='top-2'>
            <i class='iconfont icon-shu'></i>
            <span>2924 W Fairmount AVE, Phoenix, AZ 85017</span>
          </span>
        </span>
        <span class="bottom">
          <span class='title'>Call Us</span>
          <span>1-888-288-1697</span>
        </span>
      </p>
    </div>
  </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.bottom-nav {
    .wrap {
        width: 100%;
        height: 50px;
        background-color: $gray-nav-color;
        display: flex;
        align-items: center;
    }
    .newsletter {
        width: 75%;
        height: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        position: relative;
        .left-text {
            width: 60%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            i {
                font-size: 25px;
                color: #999;
            }
            span:nth-of-type(1) {
                color: #7082b3;
                font-size: 14px;
            }
        }
        .right-input {
            width: 40%;
            height: 30px;
            display: flex;
            justify-content: center;
            input {
                width: 60%;
                height: 100%;
                border: 1px solid $gray-border;

            }
            &::after {
                content: 'Sign Up';
                width: 50px;
                height: 100%;
                color: #b6afa7;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: white;
                border: 1px solid $gray-border;
                border-left: none;
            }
        }

    }
    .bottom-list {
        width: 100%;
        // height: 200px;
        padding-top: 20px;
        .wrapper {
            width: 80%;
            height: 120px;
            display: flex;
            margin: 0 auto;
            .li-1,
            .li-2,
            .li-3,
            .li-4 {
                .title {
                    color: $gray-bottom-title-color;
                    font-size: 10px;
                    display: flex;
                    text-transform: capitalize;
                }
                span {
                    color: $gray-bottom-color;
                    font-size: 6px;
                }
            }
            .li-1,
            .li-2 {
                width: 30%;
                height: 100%;
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                .li-list {
                    width: 100%;
                    height: 80%;
                    display: flex;
                    .left,
                    .right {
                        display: flex;
                        width: 50%;
                        height: 100%;
                        flex-flow: column;
                        text-transform: capitalize;
                        span {
                            margin-top: 8px;
                        }
                    }
                }
            }
            .li-3,
            .li-4 {
                width: 20%;
                height: 100%;
                display: flex;
                flex-flow: column;
            }
            .li-3 {
                .icons {
                    width: 60%;
                    height: 50px;
                    position: relative;
                    i {
                        position: absolute;
                    }
                    i:nth-child(1) {
                        font-size: 22px;
                        top: 10%;
                        left: 0;
                    }
                    i:nth-child(2) {
                        font-size: 20px;
                        top: 11%;
                        left: 30%;
                    }
                    i:nth-child(3) {
                        font-size: 20px;
                        top: 15%;
                        left: 60%;
                    }
                }
            }
            .li-4 {
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                .bottom,
                .top {
                    width: 100%;
                    height: 50%;
                }
                .top {
                    .top-2 {
                        display: flex;
                        margin-top: 8px;
                        i {
                            display: flex;
                            font-size: 20px;
                            margin-right: 3px;
                        }
                    }

                }
            }
        }
    }
}
</style>
