<template lang="html">
  <div class="collapse">
    <el-collapse v-model="activeNames" @change="">
      <el-collapse-item title="PRODUCT DESCRIPTION" name="1" class='p1'>
        <div>A relaxing way to retreat from the day! Soft cotton padding and gentle rocking motion cradle you in exceptional comfort. Great for use indoors or out. Max Wt.: 200 lbs. Seat: 10 1/2" wide.</div>
        <div>Recycled cotton. Chair is 38" x 17 3/4" x 52" high.</div>
      </el-collapse-item>
      <el-collapse-item title="OTHER DETAILS" name="2">
        <div>Material(s): WOOD, COTTON, RECYCLED COTTON</div>
      </el-collapse-item>
      <el-collapse-item title="PRODUCT REVIEWS" name="3">
        <button type="button" class='write-review' name="button" @click='writeReview()'>Write Review</button>
        <write-review v-show='showWriteReview'></write-review>
        <div>This product hasn't received any reviews yet. Be the first to review this product!</div>
      </el-collapse-item>
      <el-collapse-item title="FIND SIMILAR PRODUCTS BY CATEGORY" name="4">
        <ul>
          <li v-for='(item, index) in items' :key='index'>{{item}}</li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import writeReview from '@/components/commodity-review'
export default {
  data() {
    return {
      activeNames: '', //type Sting
      showWriteReview: false,
      items: ['Garden', 'Hammocks'],
    }
  },
  components: {
    'write-review': writeReview
  },
  methods: {
    writeReview() {
      this.showWriteReview = !this.showWriteReview;
    }
  }
}
</script>
<style media="screen">
.el-collapse {
  border: 0;
}

.el-collapse-item__wrap {
  border: 0;
}

.el-collapse-item {
  border: 0;
  margin-top: 10px;
}

.el-collapse-item__header {
  color: #a09281;
  border: 1px solid #a09281;
  text-transform: uppercase;
}

.el-collapse-item__content {
  padding-left: 20px;
  color: #5c5b5b;
  background-color: white;
}
</style>
<style lang="scss" scoped>
.collapse {
    margin-top: 100px;
    li {
        list-style: initial;
        margin-left: 14px;
    }
    .p1 {
        div:nth-child(2) {
            margin-top: 60px;
        }
    }
    .write-review {
        width: 80px;
        height: 30px;
        font-size: 12px;
        margin: 6px 0;
        background-color: #7082b3;
        color: white;
        font-weight: 400;
        &:hover {
            // box-shadow: 0 120px 1px red inset;
            opacity: 0.8;
        }
    }
}
</style>
