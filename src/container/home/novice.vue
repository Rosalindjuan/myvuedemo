<template>
  <Panel class="panel" title="新手特权">
    <section class="content">
      <div class="item">
        <h4>下载APP <span class="red">新手专享</span></h4>
        <p class="gray">立即开通</p>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421" alt="">
      </div>
      <div class="item">
        <ul>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421" alt="">
            <h4 class="red">领128元新手礼包</h4>
            <p class="gray">立即开通</p>
          </li>
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421" alt="">
            <h4>打白条 <span class="red">享免息</span></h4>
            <p class="gray">立即开通享豪礼</p>
          </li>
        </ul>
      </div>
    </section>
  </Panel>
</template>

<script>
  import Panel from "@/components/core/panel.vue"
  export default {
    components: {
      Panel
    },
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/element";
  .panel {
    @include panel;
    > h4 {
      border-bottom:1px solid #ddd;
    }
    .content {
      border-top: 1px solid #ddd;
      @include list(row);
      .item {
        width: 50%;
        box-sizing: border-box;
        &:first-child {
          padding: 32px 20px;
          text-align: center;
          border-right: 1px solid #ddd;
          img {
            width: 132px;
            height: 132px;
            margin: 20px auto 0;
          }
        }
        h4 {
          font-size: 26px;
          line-height: 40px;
        }
        .red{
          color: #f00;
        }
        .gray {
          color: #999;
          font-size: 24px;
        }
        p {
          margin: 6px;
          font-size: 24px;
        }
        ul {
          width: 100%;
          li {
            height: 144px;
            width: 100%;
            padding: 32px 28px;
            box-sizing: border-box;
            &:first-child {
              border-bottom: 1px solid #ddd;
            }
            h4 {
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              text-align: left;
            }
            img {
              width: 80px;
              height: 80px;
              float: right;
            }

          }
        }
      }
    }
  }

</style>
