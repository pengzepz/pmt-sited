<template lang="html">
  <div class="index">
    <header>
      <top-nav></top-nav>
    </header>
    <router-view></router-view>
    <footer>
      <bottom-nav></bottom-nav>
    </footer>
  </div>
</template>

<script>
import topNav from '@/components/nav/top-nav'
import bottomNav from '@/components/nav/bottom-nav'
export default {
  components: {
    'top-nav': topNav,
    'bottom-nav': bottomNav
  }
}
</script>

<style lang="scss" scoped>
.index {}
</style>
