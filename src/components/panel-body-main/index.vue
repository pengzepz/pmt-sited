<template lang="html">
  <div class="body-main">
    <div class="top-panel">
      <p>{{title}}</p>

        <div class="top-pagination">
          <pagination :options='items' :totalPage='50'></pagination>
        </div>
    </div>
    <div class="img-list">
      <div class="list"  v-for='(item, index) in imgList' :key='index'>
        <img :alt="item.desc" :src="item.src" :class="hov == index ? 'mouse-enter' : 'mouse-leave'" @click='catDetails(item)' @mouseenter='mEnter(index)' @mouseleave='mLeave()'>
        <p class='desc' @click='catDetails(item)'>{{item.desc}}</p>
        <p>{{item.price}}</p>
        <span class='quick' v-show="hov == index ? true : false" @click='showMask()' @mouseenter='mEnter(index)'>QUICK VIEW</span>
      </div>
    </div>
    <commodity-quick v-show='maskStatus'></commodity-quick>
    <div class="bottom-pagination">
      <pagination :options='items' :totalPage='50'></pagination>
    </div>
  </div>
</template>

<script>
import pagination from '@/components/pagination'
import commodityQuick from '@/components/commodity-quick-view'
import {
  mapMutations,
  mapState
} from 'vuex'
export default {
  props: ['title', 'imgList'],
  data() {
    return {
      items: [{
          value: '选项1',
          label: 'Newest Items'
        },
        {
          value: '选项2',
          label: 'Bestselling'
        },
        {
          value: '选项3',
          label: 'Alphabetical: A to Z'
        },
        {
          value: '选项4',
          label: 'Alphabetical: Z to A'
        },
        {
          value: '选项5',
          label: 'Customer Review'
        },
        {
          value: '选项6',
          label: 'Price: Low to High'
        },
        {
          value: '选项7',
          label: 'Price: High to Low'
        }
      ],
      value: '',
      hov: null
    }
  },
  components: {
    'pagination': pagination,
    'commodity-quick': commodityQuick
  },
  computed: {
    ...mapState(['maskStatus'])
  },
  methods: {
    ...mapMutations(['COMMODITYDETAILS', 'CHANGEMASKSRATUS']),
    catDetails(item) {
      this.COMMODITYDETAILS(item);
      this.$router.push({
        name: 'commodityDetails'
      });
    },
    mEnter(index) {
      this.hov = index;
    },
    mLeave() {
      this.hov = null;
    },
    showMask() {
      this.CHANGEMASKSRATUS(true);
      console.log(this.$store.state.maskStatus);
    }
  }
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
        .top-pagination {
            margin-top: 10px;
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
            position: relative;
            .quick {
                display: inline-flex;
                width: 60px;
                height: 25px;
                align-items: center;
                justify-content: center;
                font-size: 8px;
                background-color: rgba(0,0,0,.5);
                color: white;
                position: absolute;
                top: 65px;
                left: 50%;
                transform: translateX(-50%);
                cursor: pointer;
            }
            .mouse-enter {
                opacity: 0.6;
            }
            .mouse-leave {
                opacity: 1;
            }
            img {
                width: 110px;
                height: 142px;
                margin: 6px 0;
                border: 1px solid $gray-border;
                cursor: pointer;
            }
            p:nth-of-type(1) {
                width: 100px;
                margin: 0 auto 3px;
                text-align: left;
                cursor: pointer;
            }
            p:nth-of-type(2) {
                width: 100px;
                margin: 0 auto 3px;
                text-align: left;
            }
        }
    }
    .bottom-pagination {
        margin-top: 50px;
    }
}
</style>
