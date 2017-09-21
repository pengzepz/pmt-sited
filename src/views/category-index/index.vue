<template lang="html">
  <div class="category">
    <h1>Verdugo Gift Company Sitemap</h1>
    <p class='desc'>A sitemap lists all pages available on a website. The sitemap for web pages on Verdugo Gift Company is shown below:</p>
    <div class="body">
      <div class="p1">
        <p class=''>Categories</p>
        <ul>
          <li v-for='(item, index) in items' :key='index'>{{item.name}}</li>
        </ul>
      </div>
      <div class="p2">
        <ul>
          <li v-for='(item, index) in items' :key='index'>{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{
          name: 'All Items',
          id: 'all'
        },
        {
          name: 'All Items',
          id: 'all'
        },
        {
          name: 'All Items',
          id: 'all'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/common-style.scss";
.category {
    h1 {
        @extend .h1-style;
    }
    .desc {
        @extend .desc-style;
    }
    .body {
        display: flex;
        width: 80%;
        margin: 37px auto;
        font-size: 10px;
        .p1,
        .p2 {
            width: 50%;
            display: flex;
            flex-flow: column;
            align-items: center;
            li {
                margin-top: 8px;
                cursor: pointer;
                &:hover {
                    color: $gray-color;
                }
            }
        }
        .p1 {
            p:nth-of-type(1) {
                font-size: 20px;
                color: #7082b3;
            }
        }
    }
}
</style>
