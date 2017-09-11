<template lang="html">
  <div class="nav-hover">
    <p class='title'>Bath and Body</p>
    <div class="list">
      <span v-for='(item, index) in items' :key='index'><i class='iconfont icon-zhengfangxing'></i>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{
          name: 'asdfasdf',
          id: 1
        },
        {
          name: 'asdfasdf',
          id: 2
        },
        {
          name: 'asdfasdf',
          id: 3
        },
        {
          name: 'asdfasdf',
          id: 4
        },
        {
          name: 'asdfasdf',
          id: 5
        },
        {
          name: 'asdfasdf',
          id: 6
        },
        {
          name: 'asdfasdf',
          id: 7
        },
        {
          name: 'asdfasdf',
          id: 8
        },
        {
          name: 'asdfasdf',
          id: 9
        },
        {
          name: 'asdfasdf',
          id: 10
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-hover {
    width: 76%;
    margin: 0 auto;
    background-color: skyblue;
    font-size: 10px;
    padding-bottom: 20px;
    z-index: 999;
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-50%);
    display: none;
    &:hover {
        display: flex;
    }
    .title {
        width: 70%;
        height: 50px;
        display: flex;
        align-items: flex-end;
        margin-left: 16px;
        font-size: 18px;
        border-bottom: 1px solid white;
    }
    .list {
        width: 70%;
        margin-left: 16px;
        display: flex;
        flex-flow: wrap;
        span {
            display: flex;
            width: 20%;
            align-items: center;
            margin-top: 20px;
            // justify-content: center;
            // border: 1px solid red;
        }
    }
}
</style>
