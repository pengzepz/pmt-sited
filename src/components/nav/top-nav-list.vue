<template lang="html">
  <div class="nav-list">
    <div class="left-list">
      <span v-for="item in items">
        <i class='iconfont icon-f11'></i>
        <span>{{item}}</span>
      </span>
    </div>
    <div class="right">
      <span>New Arrivals</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Bath and Body', 'Garden', 'Glass Craft Supplies', 'Giftware', 'Home Decor', 'Toys and Games']
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-list {
    width: 80%;
    height: 35px;
    margin: 0 auto;
    display: flex;
    .left-list {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        span {
            display: flex;
            align-items: center;
        }
    }
    .right {
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>
