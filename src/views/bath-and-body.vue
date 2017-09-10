<template lang="html">
  <div class="panel-1">
    <div class="img-wrap">
      <img src="../assets/img/panel-1.png" alt="">
    </div>
    <div class="body">
      <body-left :data='data'>
        <p><i class='iconfont icon-icon2'></i>bath furniture and accessories</p>
        <p><i class='iconfont icon-icon2'></i>spa gift sets</p>
      </body-left>
      <body-main :title='data.title' :imgList='imgs'></body-main>
    </div>

  </div>
</template>

<script>
import bodyLeft from '../components/panel-body-left'
import bodyMain from '../components/panel-body-main'
export default {
  data() {
    return {
      data: {
        title: 'bath and body',
        list: ['bath furniture and accessories', 'spa gift sets'],
      },
      imgs: [{
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        },
        {
          src: 'http://cdn.dxf-app.shangcars.cn/QRcode.png',
          desc: 'BEAR FAMILY TOILET BRUSH HOLDER',
          price: '$29.38'
        }
      ]
    }
  },
  components: {
    'body-left': bodyLeft,
    'body-main': bodyMain
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/common-style.scss";
.panel-1 {
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
