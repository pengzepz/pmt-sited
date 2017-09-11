<template lang="html">
  <div class="home-decor">
    <body-panel :topImg='topImg' :data='obj'></body-panel>
  </div>
</template>

<script>
import bodyPanel from '@/components/panel-body'
export default {
  data() {
    return {
      topImg: 'http://ou7kw8mxw.bkt.clouddn.com/p5.png',
      obj: {
        leftData: {
          title: 'bath and body',
          list: ['bath furniture and accessories', 'spa gift sets'],
        },
        mainData: {
          title: 'bath and body',
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
      }
    }
  },
  components: {
    'body-panel': bodyPanel
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.home-decor {
    width: 100%;
}
</style>
