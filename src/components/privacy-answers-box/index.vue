<template lang="html">
  <div class="">
    <ul>
      <li v-for='(item, index) in items' :key='index'><span>{{item}}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['items']
}
</script>

<style lang="scss">
// @import "../../assets/css/common-style.scss";
ul {
    padding-left: 0.6rem;
    color: #000;
    font-size: 12px;
    li {
        list-style: initial;
        margin-top: 0.3rem;
    }
}
</style>
