<template>
  <div class="container">
    <div class="footer">
      <div class="page clearfix">
        <div class="row fl">
          <h3>探索更多</h3>
          <ul>
            <li>宜联京东自营旗舰店</li>
            <li>宜联天猫Elean旗舰店</li>
          </ul>
        </div>
        <div class="row fl">
          <h3>关于我们</h3>
          <ul>
            <li>企业坚决</li>
            <li>我们的服务</li>
            <li>招商合作</li>
          </ul>
        </div>
        <div class="row fl">
          <h3>联系我们</h3>
          <ul>
            <li>地址：江西省 宜春市 袁州区 科伦大道宜联科技有限公司</li>
            <li><img :src=tel alt=""></li>
          </ul>
        </div>
        <div class="qscode fr">
          <img :src=qscode alt="">
          <div class="weixin">关注微信公众号</div>
        </div>
      </div>

    </div>
    <div class="copyright">
      <div class="page clearfix">
        <div class="">Copynight@宜春宜联科技有限公司</div>
        <div class="last">All Rights Reserved</div>
      </div>
    </div>
  </div>
</template>

<script>
  import tel from "@image/tel.jpg";
  import qscode from "@image/qscode.jpg"
  export default {
    name: "el-footer",
    data(){
      return{
        tel:tel,
        qscode:qscode,
      }
    },
  }
</script>

<style scoped lang="scss">
  .container {
  }

  .footer {
    background: #EEEEEC;
    height: 360px;
    padding-top: 46px;
    .row{
      width: 250px;
      line-height: 70px;
      h3{
        color: #76726F;
      }
    }
    & .row:last-child{
      width: 400px;
      img{
        margin-top: 20px;
      }
    }
    .qscode{
      margin-right: 42px;
      margin-top: 30px;
      img{
        width: 150px;
        height: 150px;
      }
      .weixin{
        text-align: center;
        line-height: 36px;
      }

    }
  }

  .copyright {
    height: 94px;
    line-height: 94px;
    .page {
      margin: 0 auto;
      text-align: center;
      div {
        display: inline-block;
      }
      .last {
        margin-left: 41px;
      }
    }
  }
</style>
