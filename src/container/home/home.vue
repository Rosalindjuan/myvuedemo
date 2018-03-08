<template>
  <div class="bg">
    <VHeader/>
    <hslider/>
    <Novice />
    <Borrow />
    <Money />
    <Product />
  </div>
</template>

<script>
  import VHeader from "@/components/header.vue"
  import hslider from "./hslider.vue"
  import Novice from './novice.vue'
  import Borrow from './borrow.vue'
  import Money from './money.vue'
  import Product from './product.vue'

  export default {
    components: {
      VHeader,
      hslider,
      Novice,
      Borrow,
      Money,
      Product
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg {
    background-color: #eee;
  }
</style>
