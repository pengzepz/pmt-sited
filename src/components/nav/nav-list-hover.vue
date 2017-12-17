<!--
@Author: default
@Date:   Sunday, December 17th 2017, 9:35:33 pm
@Last modified by:   default
@Last modified time: Sunday, December 17th 2017, 10:42:20 pm
-->

<template lang="html">
  <div class="nav-hover" v-show='navHoverNum != null' @mouseenter='showHoverPanel(navHoverNum)' @mouseleave='hideHoverPanel()'>
    <p class='title'>{{titleList[navHoverNum]}}</p>
    <img :src="bgSrc" alt="" class='bg-img'>
    <div class="list">
      <!-- <router-link tag='span' v-for='(item, index) in items[navHoverNum]' @click='closeHover()' :key='index' :to='{name: numMapPath[navHoverNum], params:{id: item.name}}'><i class='iconfont icon-zhengfangxing'></i>{{item.name}}</router-link> -->
      <span v-for='(item, index) in items[navHoverNum]' @click='closeHover(item)' :key='index'><i class='iconfont icon-zhengfangxing'></i>{{item.name}}</span>
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations
} from 'vuex'
export default {
  data() {
    return {
      titleList: [1, 2, 3, 4, 5, 6, 7],
      items: [
        [{
            name: 'b-a-b',
            id: 1
          },
          {
            name: 'b-a-b',
            id: 2
          },
          {
            name: 'b-a-b',
            id: 3
          },
          {
            name: 'b-a-b',
            id: 4
          },
          {
            name: 'b-a-b',
            id: 5
          },
          {
            name: 'b-a-b',
            id: 6
          },
          {
            name: 'b-a-b',
            id: 7
          },
          {
            name: 'b-a-b',
            id: 8
          },
          {
            name: 'b-a-b',
            id: 9
          },
          {
            name: 'b-a-b',
            id: 10
          }
        ],
        [{
            name: 'garden',
            id: 1
          },
          {
            name: 'garden',
            id: 2
          },
          {
            name: 'garden',
            id: 3
          },
          {
            name: 'garden',
            id: 4
          },
          {
            name: 'garden',
            id: 5
          },
          {
            name: 'garden',
            id: 6
          },
          {
            name: 'garden',
            id: 7
          },
          {
            name: 'garden',
            id: 8
          },
          {
            name: 'garden',
            id: 9
          },
          {
            name: 'garden',
            id: 10
          }
        ],
        [{
            name: '12',
            id: 1
          },
          {
            name: '12',
            id: 2
          },
          {
            name: 'garden',
            id: 3
          },
          {
            name: 'garden',
            id: 4
          },
          {
            name: 'garden',
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
        ],
        [{
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
        ],
        [{
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
        ],
        [{
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
        ],
        [{
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
      ]
    }
  },
  watch: {

  },
  computed: {
    ...mapState(['navHoverNum', 'numMapPath', 'hoverListBgImg']),
    bgSrc() {
      console.log('computed');
      if (this.navHoverNum != null) {
        let dom = document.getElementsByClassName('nav-hover')[0];
        dom.style.backgroundImage = this.hoverListBgImg[this.navHoverNum];
        return this.hoverListBgImg[this.navHoverNum];
      }
    }
  },
  methods: {
    ...mapMutations(['CHANGENAVLISTHOVERNUM']),
    showHoverPanel(num) {
      // this.CHANGENAVLISTHOVERNUM(num);
      // console.log(this.$store.state.navHoverNum, 'store');
    },
    hideHoverPanel() {
      this.CHANGENAVLISTHOVERNUM(null);
    },
    closeHover(item) {
      console.log(111);
      // this.CHANGENAVLISTHOVERNUM(null);
      this.$router.push({
        name: this.numMapPath[this.navHoverNum],
        params: {
          id: item.name
        }
      });

    }
  }
}
</script>

<style lang="scss" scoped>
.nav-hover {
    width: 76%;
    height: 230px;
    margin: 0 auto;
    font-size: 10px;
    z-index: 999;
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    .bg-img {
        z-index: -998;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
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
            cursor: pointer;
            // justify-content: center;
            // border: 1px solid red;
        }
    }
}
</style>
