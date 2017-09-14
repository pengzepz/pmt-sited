<template lang="html">
  <div class="explore-results">
    <ul>
      <li v-for='(item, index) in items' :key='index'>
        <img :src="item.src" alt="">
        <div class="right">
          <span>{{item.name}}</span>
          <span>${{item.price}}</span>
        </div>
      </li>
      <span class='catMore'>View all results>></span>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['items']
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.explore-results {
    ul {
        border: 1px solid $gray-border;
        background-color: white;
        li {
            width: 80%;
            height: 70px;
            // border: 1px solid red;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            img {
                width: 20%;
                height: 80%;
                margin-left: 6px;
                border: 1px solid $gray-border;

            }
            .right {
                width: 80%;
                height: 80%;
                display: flex;
                justify-content: space-between;
                flex-flow: column;
                font-size: 12px;
                padding-left: 10px;
                span:nth-of-type(1) {
                    // color: #999;
                }
                span:nth-of-type(2) {
                    font-weight: 600;
                }
            }
        }
        .catMore {
            font-weight: 600;
            display: block;
            margin: 20px 0 20px 10px;
            cursor: pointer;
        }
    }
}
</style>
