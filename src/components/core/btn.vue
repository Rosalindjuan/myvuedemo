<template>
  <div :class="[btnClass, cname]">
    <slot/>
    <!-- 插槽 slot-->
  </div>
</template>

<script>
  export default {
    props: {
      cname: {
        type: String,
        default: ''
      }
    },
    data () {
        return {
            btnClass: 'btn'
        }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/element";

  .btn {
    @include btn;
  }
</style>
