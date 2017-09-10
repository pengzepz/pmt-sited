<template lang="html">
  <div class="body-main">
    <div class="top-panel">
      <p>{{title}}</p>
      <p><span>Sort by</span> <input type="text" name="" value="" readonly='readonly' placeholder='Featured items'><i class='iconfont icon-f11'></i></p>
    </div>
    <div class="img-list">
      <div class="list"  v-for='(item, index) in imgList' :key='index'>
        <img :alt="item.desc" :src="item.src">
        <p class='desc'>{{item.desc}}</p>
        <p>{{item.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'imgList']
}
</script>

<style lang="scss">
@import "../../assets/css/common-style.scss";
.body-main {
    width: 76%;
    .top-panel {
        p:nth-child(1) {
            font-size: 12px;
            color: #5c5b5b;
        }
        p:nth-child(2) {
            display: flex;
            align-items: center;
            height: 18px;
            margin-top: 6px;
            span {
                font-size: 10px;
            }
            input {
                width: 25%;
                height: 100%;
                font-style: italic;
                border: 1px solid $gray-border;
                margin-left: 10px;

            }
            i {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid $gray-border;
                border-left: none;
            }
        }
    }
    .img-list {
        width: 100%;
        padding-top: 16px;
        display: flex;
        flex-flow: row wrap;
        .list {
            width: 23%;
            text-align: center;
            margin-top: 10px;
            margin-right: 10px;
            img {
                width: 110px;
                height: 142px;
                margin: 6px 0;
                border: 1px solid $gray-border;
            }
            p:nth-of-type(1) {
                width: 100px;
                margin: 0 auto 3px;
                text-align: left;
            }
            p:nth-of-type(2) {
                width: 100px;
                margin: 0 auto 3px;
                text-align: left;
            }
        }
    }
}
</style>
