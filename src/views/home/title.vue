<template>
    <div class="el-title">
      <div class="ch">
        {{titleCh}}
        <div class="line1"></div>
        <div class="line2"></div>
      </div>
      <div class="en">{{titleEn}}</div>
    </div>
</template>

<script>
    export default {
        name: "el-title",
        props:{
          titleEn:String,
          titleCh: String
        },
      data() {
        return {

        }
      },
    }
</script>

<style scoped lang="scss">
  .el-title{
    width: 320px;
    height: 75px;
    padding-top: 60px;
    margin: 0 auto;
    font-size: 34px;
    text-align: center;
    .ch{
      position: relative;
      .line1{
        width: 50px;
        height: 1px;
        background: #FE8C5A;
        position: absolute;
        top: 25px;
        left: 0;
      }
      .line2{
        width: 50px;
        height: 1px;
        background: #FE8C5A;
        position: absolute;
        top: 25px;
        right: 0;
      }
    }
    .en{
      font-size: 18px;
      color: #8E8E8E;
    }
  }
</style>
