<template>
  <div class="header">
    <span class="left">
      <em>注册</em> | <em>登录</em>
    </span>
    <btn class="btn-download">APP下载</btn>
  </div>
</template>

<script>
  import btn from "./core/btn.vue"
  export default {
    components: {
      btn
    }
  }
</script>


<style lang="scss" scoped>
  .header {
    color: #666;
    height: 100px;
    line-height: 100px;
    position: fixed;
    /*border: 1px solid red;*/
    top: 0;
    left: 0;
    right: 0;
    font-size: 32px;
    background: #fff url("//m.jr.jd.com/spe/qyy/main/images/jr-logo.png") center center no-repeat;
    background-size: auto 50%;
    z-index: 100;
  }

  .left {
    font-size: 28px;
    height: 30px;
    margin: 17px 0 0 18px;
  }

  div.btn-download {
    border-width: 0;
    float: right;
    font-size: 24px;
    height: 56px;
    line-height: 56px;
    min-width: 120px;
    padding: 0;
    margin: 28px 24px 0 0;
    border-radius: 4px;
    color: #fff;
  }
</style>
