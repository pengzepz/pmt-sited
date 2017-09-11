<template lang="html">
  <div class="panel">
    <div class="img-wrap">
      <img :src="topImg" alt="">
    </div>
    <div class="body">
      <body-left :data='data.leftData'>
        <p v-for="(v, i) in data.leftData['list']" :key='i'><i class='iconfont icon-icon2'></i>{{v}}</p>
      </body-left>
      <body-main :title='data.mainData.title' :imgList='data.mainData.imgs'></body-main>
    </div>

  </div>
</template>

<script>
import bodyLeft from '@/components/panel-body-left'
import bodyMain from '@/components/panel-body-main'
export default {
  data() {
    return {}
  },
  props: ['topImg', 'data'],
  components: {
    'body-left': bodyLeft,
    'body-main': bodyMain
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.panel {
    width: 76%;
    margin: 0 auto;
    .img-wrap {
        width: 100%;
        img {
            width: 100%;
        }
    }
    .body {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
}
</style>
