<template lang="html">
  <div class="top-nav">
      <div class="inner" @mouseenter='hideHoverPanel'>
        <span>
          <img src="../../assets/img/logo.png" alt="" @click='home()' style='cursor:pointer'>
        </span>
        <div class="right">
          <div class="right-top">
            <p>
              <span @click='$developing()'>my account</span>
              <span @click='$developing()'>wishlist</span>
              <router-link tag='span' :to="{name: 'aboutUs'}">about us</router-link>
              <span @click='$developing()'>blog</span>
            </p>
            <p>Questions?<span>1-888-288-1697</span></p>
          </div>
          <div class="right-bottom">
            <input type="text" name="" value="" placeholder='Search keywork or item #' v-model='value' @input='inputExplore()'>
            <i class='iconfont icon-sousuo'></i>
          </div>
          <explore-result class='results' v-show='explore' :items='itemList'></explore-result>
        </div>
      </div>
      <nav-list></nav-list>
  </div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
import navList from '@/components/nav/top-nav-list'
import exploreResult from '@/components/explore-results'
// import {
//   developing
// } from '@/api/utils'
export default {
  data() {
    return {
      results: false,
      value: null,
      itemList: [{
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          name: 'commodity',
          'price': '18'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          name: 'commodity',
          'price': '15'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          name: 'commodity',
          'price': '14'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          name: 'commodity',
          'price': '19'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          name: 'commodity',
          'price': '18'
        }
      ]
    }
  },
  components: {
    'nav-list': navList,
    'explore-result': exploreResult
  },
  computed: {
    explore() {
      if (this.results) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    ...mapMutations(['CHANGENAVLISTHOVERNUM']),
    hideHoverPanel() {
      this.CHANGENAVLISTHOVERNUM(null);
      console.log('tophidehover');
    },
    inputExplore() {

      this.value ? this.results = true : this.results = false;
    },
    home() {
      this.$router.push('/');
    }
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
            position: relative;
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
                    span {
                        cursor: pointer;
                    }
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
            .results {
                position: absolute;
                bottom: -373%;
                z-index: 999999999;
            }
        }
    }
}
</style>
