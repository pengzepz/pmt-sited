<template lang="html">
  <div class="bottom-nav">
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.bottom-nav {
    width: 100%;
    height: 50px;
    background-color: $gray-nav-color;
    display: flex;
    align-items: center;
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
}
</style>
