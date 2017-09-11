<template lang="html">
  <div class="nav-list">
    <div class="left-list">
      <!-- <span v-for="item in items">
        <i class='iconfont icon-f11'></i>
        <span>{{item}}</span>
      </span> -->
      <router-link tag='span'  v-for="(item, index) in items" :to="{name: item.link}" class='route' :key='index'>
        <i class='iconfont icon-f11'></i>
        <span>{{item.name}}</span>
      </router-link>
    </div>
    <div class="right">
      <router-link tag='span' :to="{name: 'seventh'}" class='route'>
        <span>New Arrivals</span>
      </router-link>
    </div>
    <nav-hover></nav-hover>

  </div>
</template>

<script>
import navHover from '@/components/nav/nav-list-hover'

export default {
  data() {
    return {
      items: [{
          name: 'Bath and Body',
          link: 'first'
        },
        {
          name: 'Garden',
          link: 'second'
        },
        {
          name: 'Glass Craft Supplies',
          link: 'third'
        },
        {
          name: 'Giftware',
          link: 'fourth'
        },
        {
          name: 'Home Decor',
          link: 'fifth'
        },
        {
          name: 'Toys and Games',
          link: 'sixth'
        }
      ]
    }
  },
  components: {
    'nav-hover': navHover
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
        .route {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }
    .right {
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
}
</style>
