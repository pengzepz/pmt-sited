<!--
@Author: default
@Date:   Sunday, December 17th 2017, 10:33:47 pm
@Last modified by:   default
@Last modified time: Sunday, December 17th 2017, 10:36:34 pm
-->

<template lang="html">
  <div class="pagination">
    <!-- 暂时隐藏排序,因产品太少 -->
    <!-- <div class="left-filter">
      <span>Sort by</span>
      <el-select v-model="value" placeholder="Featured items" class='select'>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div> -->

    <!-- <el-pagination
  layout="prev, pager, next,jumper"
  :total="totalPage"
  :page-size='15'
  :current-page.sync="1"
  @current-change="handleCurrentChange">
</el-pagination> -->

<el-pagination
  @current-change="handleCurrentChange"
  :current-page.sync="currentPage"
  :page-size="15"
  layout="prev, pager, next, jumper"
  :total="totalPage">
</el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      currentPage: 1
    }
  },
  props: ['options', 'totalPage'],
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
}
</script>
<style lang="scss">
.pagination {
    width: 100%;
    display: flex;
    align-items: center;
    // justify-content: space-between;
    justify-content: flex-end;
    .left-filter {
        span:nth-of-type(1) {
            font-size: 10px;
            margin-right: 6px;
        }
        input {
            height: 20px;
        }
    }

}
</style>
