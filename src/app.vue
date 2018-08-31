
<template>
  <div id="app" class="app">
    <!--头部-->
    <el-header></el-header>
    <!--<m-loading :load="load"></m-loading>-->
    <router-view></router-view>
    <!--头部-->
    <el-footer></el-footer>
  </div>
</template>

<script>
/*import Loading from './components/loading'*/
import header from './components/header'
import footer from './components/footer'
export default {
  name: 'app',
  components: {
    /*[Loading.name]: Loading,*/
    [header.name]: header,
    [footer.name]: footer
  },
  computed: {
    load() {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="scss">
  @import './global/style/color';
  .app {
    min-width: 1400px;
  }
</style>
