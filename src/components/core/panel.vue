<template>
  <section :class="[panelClass, cname]">
    <h4 class="title">- {{title}} -</h4>
    <slot/>
  </section>
</template>
<script>
  export default {
    props: {
      cname: {
        type: String,
        default: "",
      },
      title: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        panelClass: 'panel'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/element";
  .panel {
    @include panel;
    .title {
      font-size: 32px;
      font-weight: bold;
      height: 112px;
      line-height: 112px;
      padding: 0 32px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

</style>


