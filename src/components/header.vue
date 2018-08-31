<template>
  <div class="container">
    <div v-if="isShow" class="top">
      <div class="page clearfix">
          <div class="fl">宜联欢迎您的到来</div>
          <div class="fr">加盟/服务热线：400-644-0833</div>
      </div>
    </div>
    <div class="header page clearfix">
      <div class="wrap fl">icom</div>
      <div class="nav fr">
        <ul class="clearfix">
          <router-link   v-for="(item,index) in menus" :key="index"  :to={path:item.path} tag="li" router-link-exact-active="checked" ><span>{{item.title}}</span></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "el-header",
    data() {
      return {
        nowIndex:0,
        menus: [
          {title: "网站首页", path: "/"},
          {title: "关于我们", path: "/about"},
          {title: "产品中心", path: "/product"},
          {title: "产品规格", path: "/specification"},
          {title: "服务宗旨", path: "/service"},
          {title: "工作机会", path: "/work"},
          {title: "联系我们", path: "/contact"},
        ]
      }
    },
    created(){
      console.log(this.$route.name);
    },
    computed: {
      isShow() {
        return this.$store.state.isShow
      }
    },
    methods: {

    },
    watch: {
    }
  }
</script>

<style scoped lang="scss">
  .top{
    background: #000;
    color: #F6F6F6;
    height: 90px;
    line-height: 90px;
    font-size: 18px;
  }
  .header {
    height: 64px;
    line-height: 64px;
    .nav{
      margin-right: -15px;
    }
    li {
      float: left;
      color: #7B7A78;
      font-size: 16px;
      cursor: pointer;
      span {
        display: inline-block;
        padding: 0 15px;
        height: 18px;
        line-height: 18px;
        border-left: 1px solid #7B7A78;
      }
    }
    & li:first-child {
      margin-right: 10px;
      span {
        border: none;
      }
    }
    .checked{
      color: #EC725A;
      position: relative;
    }
    .checked:before{
      position: absolute;
      display: block;
      content: "";
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid #EC725A;
      left:50%;
      top:10px;
      margin-left: -6px;
    }
  }
</style>
