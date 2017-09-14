<template lang="html">
  <div class="body-left">
    <div class="top-part">
      <p class='title'>{{item.title}}</p>
      <div class="slots">
        <!-- <slot v-for='(item, index) in item.list.length'></slot> -->
        <slot></slot>
      </div>
      <!-- <slot></slot>
      <slot></slot>
      <slot></slot>
      <slot></slot>
      <slot></slot> -->
    </div>
    <div class="bottom-part">
      <p class='title'></i>shop by price</p>
      <p class='li'><i class='iconfont icon-icon2'></i>$0.00-$33.00</p>
      <p class='li'><i class='iconfont icon-icon2'></i>$33.00-$57.00</p>
      <p class='li'><i class='iconfont icon-icon2'></i>$57.00-$82.00</p>
      <p class='li'><i class='iconfont icon-icon2'></i>$106.00-$130.00</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: this.data
    }
  },
  props: ['data']
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.body-left {
    width: 20%;
    .title {
        font-size: 10px;
        color: $gray-body-left-title;
        border: 1px solid $gray-border;
        text-transform: uppercase;
        padding-left: 6px;
        text-align: center;
    }
    .li,
    .slots {
        color: $gray-bottom-color;
        font-size: 6px;
        text-transform: capitalize;
        margin: 12px 0 0 6px;

        i {
            margin-right: 3px;
        }

    }
    .li {
        display: flex;
        align-items: center;
    }
    .slots {
        margin-bottom: 20px;
        p {
            display: flex;
            align-items: center;
            margin-top: 6px;
        }
    }
}
</style>
