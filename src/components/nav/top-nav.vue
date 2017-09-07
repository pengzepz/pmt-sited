<template lang="html">
  <div class="top-nav">
      <div class="inner">
        <span>
          <img src="../../assets/img/logo.png" alt="">
        </span>
        <div class="right">
          <div class="right-top">
            <p>
              <span>my account</span>
              <span>wishlist</span>
              <span>about us</span>
              <span>blog</span>
            </p>
            <p>Questions?<span>1-888-288-1697</span></p>
          </div>
          <div class="right-bottom">
            <input type="text" name="" value="" placeholder='Search keywork or item #'>
            <i class='iconfont icon-sousuo'></i>
          </div>
        </div>
      </div>
      <nav-list></nav-list>
  </div>
</template>

<script>
import navList from '@/components/nav/top-nav-list'
export default {
  components: {
    'nav-list': navList
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.top-nav {
    width: 100%;
    border-bottom: 1px solid $gray-border;
    .inner {
        max-width: 80%;
        height: 106px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        .right {
            width: 70%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            flex-flow: column;
            .right-top {
                width: 80%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 16px;
                p:nth-child(1) {
                    width: 60%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: $gray-color;
                    text-transform: uppercase;
                    font-size: 6px;
                }
                p:nth-child(2) {
                    color: $gray-q-color;
                    span {
                        color: $black-phone-color;
                        font-weight: 700;
                    }
                }
            }
            .right-bottom {
                width: 80%;
                height: 30px;
                display: flex;
                input {
                    width: 100%;
                    height: 100%;
                    border: 1px solid $gray-border;
                }
                i {
                    width: 50px;
                    height: 100%;
                    font-size: 16px;
                    border: 1px solid $gray-border;
                    border-left: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
}
</style>
