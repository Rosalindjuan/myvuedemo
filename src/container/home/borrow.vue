<template>
  <Panel class="panel" title="极速借贷">
    <section class="content">
      <router-link :to="{name: 'home'}">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t15583/348/2209539372/42536/6bae28a8/5a953b19Nd7e46726.jpg?width=750&height=200" alt="">
      </router-link>
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
    .content {
      padding-bottom: 40px;
      img {
        width: 100%;
        display: block;
      }
    }
  }
</style>
