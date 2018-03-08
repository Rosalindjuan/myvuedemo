<template>
  <Panel class="panel" title="理财精选">
    <section class="content">
      <dl class="item" v-for="(item, i) in items" :key="i">
        <dt>{{item.title}}<span>{{item.sub}}</span></dt>
        <dd>{{item.rate}}</dd>
        <dd>{{item.text}}</dd>
      </dl>
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
      return {
        items: [
          {title: '定期理财', sub: '90天可质押', rate: '5.50%', text: '历史年化结算利率'},
          {title: '定期理财', sub: '90天可质押', rate: '5.50%', text: '历史年化结算利率'},
          {title: '定期理财', sub: '90天可质押', rate: '5.50%', text: '历史年化结算利率'},
          {title: '定期理财', sub: '90天可质押', rate: '5.50%', text: '历史年化结算利率'},
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/element";

  .panel {
    @include panel;
    .content {
      @include flex(row);
      justify-content: space-around;
      box-sizing: border-box;
      &:after {
        content: ' ';
        display: block;
        width: 100%;
        height: 0;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        position: relative;
        top: -203px;
      }
      .item {
        position: relative;
        width: 50%;
        box-sizing: border-box;
        padding: 34px 32px;
        &:after {
          content: '';
          width: 1px;
          height: 136px;
          display: block;
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -68px;
          border-right: 1px solid #eee;
        }
        &:nth-child(2n) {
          &:after {
            display: none;
          }
        }
        dt {
          color: #333;
          font-size: 30px;
          line-height: 42px;
          font-weight: bold;
          span {
            font-size: 22px;
            color: #ff5155;
            border: 1px solid #ff5155;
            padding: 0 8px;
            margin-left: 2px;
            vertical-align: 1px;
          }
        }
        dd {
          &:nth-child(2) {
            font-weight: bold;
            font-size: 44px;
            height: 58px;
            line-height: 58px;
            color: #ff5155;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          &:nth-child(3) {
            font-size: 24px;
            height: 34px;
            line-height: 34px;
            color: #999;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>
