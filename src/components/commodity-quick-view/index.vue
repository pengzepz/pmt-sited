<template lang="html">
  <div class="quick-view">
    <div class="main">
      <img src="https://cdn3.bigcommerce.com/s-la2c8y/products/3349/images/5029/MIDNIGHT_WISTERIA_LANTERN_SPA_SET__91145.1430861055.468.468.jpg?c=2" alt="">
      <div class="left-container">
        <p class='name'>MIDNIGHT WISTERIA LANTERN SPA SET</p>
        <p class='price'>$<span>32.95</span></p>
        <p class='quantity'>Quantity:</p>
        <input type="text" name="" value="" v-model='quantity'>
        <button type="button" name="button">Add to shopping bag</button>
        <span class='cat-details' @click='catDetails()'>or View Details</span>
      </div>
      <i class='iconfont icon-cha close' @click='closeMask()'></i>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
import {
  mapMutations
} from 'vuex'
export default {
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapMutations(['CHANGEMASKSRATUS']),
    closeMask() {
      this.CHANGEMASKSRATUS(false);
    },
    catDetails() {
      this.$router.push({
        name: 'commodityDetails'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.quick-view {

    .mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.6;
        background-color: black;
        z-index: 9;
    }
    .main {
        width: 60%;
        // height: 300px;
        display: flex;
        background-color: white;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        opacity: 1 !important;
        padding: 10px 0 30px;
        img {
            width: 250px;
        }
        .left-container {
            // border: 1px solid red;
            word-wrap: break-word;
            // word-break: break-all;
            margin-right: 100px;
            .name {
                color: 233874;
                font-size: 22px;
            }
            .price {
                color: #333;
                font-size: 20px;
                font-weight: bold;
                margin: 10px 0;
            }
            .quantity {
                font-size: 10px;
                font-weight: bold;
            }
            input {
                width: 40px;
                height: 20px;
                padding-left: 0;
                color: $gray-bottom-color;
                text-align: center;
                border: 1px solid $gray-border;
                margin-top: 10px;
            }
        }
        button {
            @extend .button-style;
            font-size: 12px;
            padding: 6px;
            margin-top: 20px;
        }
        .cat-details {
            cursor: pointer;
            font-size: 10px;
        }
    }
    .close {
        font-size: 20px;
        position: absolute;
        top: 6px;
        right: 10px;
        cursor: pointer;
    }

}
</style>
