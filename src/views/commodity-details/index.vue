<!--
@Author: default
@Date:   Sunday, December 17th 2017, 10:37:02 pm
@Last modified by:   default
@Last modified time: Sunday, December 17th 2017, 10:37:02 pm
-->

<template lang="html">
  <div class="commodity-details">
    <div class="main">
      <img src="../../assets/img/cmd-1.1.jpg" alt="" class='show-img'>
      <div class="details">
        <div class="little-img">
          <img src="../../assets/img/cmd-1.jpg" alt="">
          <img src="../../assets/img/cmd-2.jpg" alt="">
        </div>
        <div class="info">
          <h1 class='name'>COTTON PADDED SWING CHAIR</h1>
          <div class="prices">
            <p class='price'><span>Price</span><span class='price-num'>$49.95</span></p>
            <p class='sale-price'><span>Sale Price</span><span>$24.99</span></p>
            <p class='save-price'>(You save $24.96)</p>
          </div>
          <div class="base-info">
            <p><span>SKU:</span><span>34302</span></p>
            <p><span>Condition:</span><span>New</span></p>
            <p><span>Weight:</span><span>4.06  LBS</span></p>
            <p><span>Shipping:</span><span>Calculated at checkout</span></p>
            <!-- <p class='qty'><span>QTY:</span><input type="text" name="" value="" v-model='qty'></p> -->
          </div>
          <!-- <div class="button-list">
            <button type="button" name="button">ADD TO CART</button>
            <button type="button" name="button">add to Wishlist</button>
          </div> -->
        </div>
      </div>
    </div>

    <commodity-collapse></commodity-collapse>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
import commodityCollapse from '@/components/commodity-collapse'
export default {
  data() {
    return {
      src: '../../assets/img/cmd-1.1.jpg',
      qty: 1
    }
  },
  components: {
    'commodity-collapse': commodityCollapse
  },
  computed: {
    ...mapState(['commodityDetails'])
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.commodity-details {
    width: 75%;
    max-width: 700px;
    margin: 20px auto;
    // border: 1px solid red;
    .main {
        display: flex;
        .show-img {
            width: 50%;
            height: 350px;
            border: 1px solid $gray-border;
        }
        .details {
            display: flex;
            width: 50%;
            .little-img {
                display: flex;
                flex-flow: column;
                margin: 0 10px;
                img {
                    border: 1px solid $gray-border;
                    padding: 10px;
                }
                img:nth-child(2) {
                    margin-top: 6px;
                }
            }
            .info {
                .name {
                    color: #233874;
                    font-size: 20px;
                }
                .prices {
                    width: 60%;
                    margin: 10px 0 30px;
                    .price,
                    .sale-price {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        color: #7082b3;
                        font-size: 15px;
                    }
                    .price {
                        span:nth-child(2) {
                            text-decoration: line-through;
                        }
                    }
                    .sale-price {
                        color: #333;
                        font-size: 13px;
                    }
                    .save-price {
                        color: $gray-bottom-color;
                        display: flex;
                        justify-content: flex-end;
                    }
                }
                .base-info {
                    color: #323433;
                    font-size: 10px;
                    font-weight: bold;
                    p {
                        margin-top: 6px;
                        span:nth-child(1) {
                            margin-right: 6px;
                        }
                    }
                    .qty {
                        display: flex;
                        align-items: center;
                        input {
                            width: 25%;
                            height: 20px;
                            border: 1px solid $gray-border;
                            text-align: center;
                            color: $gray-bottom-color;
                            padding-left: 0;
                        }
                    }
                }
                .button-list {
                    button:nth-child(1) {
                        width: 120px;
                        height: 30px;
                        font-size: 14px;
                        margin: 6px 0;
                        background-color: #7082b3;
                        color: white;
                        font-weight: 400;
                        &:hover {
                            // box-shadow: 0 120px 1px red inset;
                            opacity: 0.8;
                        }
                    }
                    button:nth-child(2) {

                        width: 100px;
                        height: 26px;
                        font-size: 12px;
                        border: 1px solid #B5C6F4;
                        color: #7183B5;
                        background-color: white;
                    }
                }
            }
        }
    }

}
</style>
