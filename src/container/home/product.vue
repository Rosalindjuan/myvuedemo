<template>
  <Panel class="panel" title="众筹新品">
    <section class="product-slider">
      <router-link to="home" class="more">更多尖货 <span> > </span></router-link>
      <swiper :options="swiperOption">
        <swiper-slide v-for="(slide,i) in swiperSlides" :key="i">
          <router-link :to="slide.href">
            <img :src="slide.src" alt="">
          </router-link>
        </swiper-slide>
      </swiper>
    </section>
  </Panel>
</template>
<script>
  import Panel from "@/components/core/panel.vue"
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import "swiper/dist/css/swiper.css";
  export default {
    components: {
      Panel,
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          slidesPerView: '2.3',
          spaceBetween: 12,
          freeMode: true
        },
        swiperSlides: [
          {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260',
          },{
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421'
          },{
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421'
          },{
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421'
          }]
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/element";
  .product-slider {
    position: relative;
    .more {
      position: absolute;
      right: 20px;
      top: -70px;
      text-decoration: none;
      color: #999;
    }
    .swiper-container {
      box-sizing: border-box;
      padding: 0 24px;
      .swiper-slide {

        a {
          display: inline-block;
          width: 100%;
          height: auto;
          border: 1px solid #ddd;
          box-sizing: border-box;
          img{
            width: 100%;
            display: block;
            overflow: hidden;

            box-sizing: border-box;
          }
        }
      }
    }
  }
  .panel {
    @include panel;

  }
</style>
