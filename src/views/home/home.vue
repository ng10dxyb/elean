<template>
  <div class="container">
    <div class=banner>
      <div class="page product">
        <div class="productImg"><img :src=productImg alt=""></div>
        <div class="more">MORE>></div>
      </div>
    </div>
    <div class="advantage">
      <div class="page">
        <el-title titleCh="我们的优势" titleEn="OUR ADVANTAGE"></el-title>
        <div class="content">
          <ul>
            <li class="row" v-for="(item,index) in advantage" :key="index">
              <div class="a-icon"><img :src=item.icon alt=""></div>
              <div class="des">{{item.des}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="category">
      <div class="page">
        <el-title titleCh="产品分类" titleEn="Product Category"></el-title>
        <div class="btn">
          <div :class="{active:item==btnName}" v-for="item in btnList" @click="productBtn(item)">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import title from './title'
  import productImg from "@image/banner.jpg";
  import icon1 from "@image/icon1.jpg";
  import icon2 from "@image/icon2.jpg";
  import icon3 from "@image/icon3.jpg";
  import icon4 from "@image/icon4.jpg";
  export default {
    name: "home",
    components: {
      [title.name]: title,
    },
    data() {
      return {
        productImg: productImg,
        icon1:icon1,
        advantage:[
          {icon:icon1,des:"以换代修"},
          {icon:icon2,des:"硒鼓持续供"},
          {icon:icon3,des:"畅打无忧"},
          {icon:icon4,des:"终生保修"}
        ],
        btnName:"全部",
        btnList:["全部","打印机","印量卡"]
      }
    },
    methods: {
      productBtn(item){
        this.btnName=item;
      }
    },
  }
</script>

<style scoped lang="scss">
  .banner {
    background: #EFEFEF;
    height: 780px;
    overflow: hidden;
    .product {
      height: 645px;
      margin-top: 120px;
      overflow: hidden;
      .productImg {
        width: 1300px;
        height: 500px;
      }
      .more {
        width: 120px;
        height: 36px;
        margin-top: 27px;
        margin-left: 400px;
        line-height: 36px;
        text-align: center;
        background: #FE8C5A;
        color: white;
      }
    }
  }
//我们的优势
  .advantage {
    background: white;
    height: 360px;
    overflow: hidden;
    .content{
      text-align: center;
      .row{
        width: 200px;
        height: 200px;
        display: inline-block;
        .a-icon{
          margin-top: 35px;
        }
        .des{
          line-height: 60px;
          color: black;
          font-size: 18px;
          font-weight: 700;
          letter-spacing:4px
        }
      }
    }
  }
  //产品分类
  .category{
    background: #EFEFEF;
    height: 618px;
    overflow: hidden;
    .btn{
      text-align: center;
      margin-top: 30px;
      div{
        display: inline-block;
        width: 67px;
        height: 34px;
        text-align: center;
        line-height: 34px;
        color: #727272;
        border: 1px solid #727272;
        cursor: pointer;
      }
      & div:nth-child(2){
        margin: 0 50px;
      }
      & .active{
        border: none;
        background: #FE8C5A;
        color: white;
      }
    }
  }
</style>
