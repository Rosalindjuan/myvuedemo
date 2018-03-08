<template>
  <article class="">
    <VHeader/>
    <section class="slider">
      <el-carousel>
        <el-carousel-item v-for="(item,i) in items" :key="i">
          <router-link :to="item.href">
            <img :src="item.src" alt="">
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </section>
    <section class="list">
      <div class="item" v-for="item in enters" :key="item.href">
        <router-link :to="{name: item.href}">
          <img :src="item.img" alt="">
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>

<script>
  import VHeader from "@/components/header.vue"

  export default {
    components: {
      VHeader
    },
    data() {
      return {
        items: [
          {
            href: 'home',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t14740/205/2132189465/45934/86db19d3/5a7d6323N9b4bc480.jpg?width=750&height=320'
          },
          {
            href: 'home1',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t15319/108/2219346343/51321/ff7f0222/5a7d6304N18d6ae39.jpg?width=750&height=320'
          },
          {
            href: 'home3',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t14740/205/2132189465/45934/86db19d3/5a7d6323N9b4bc480.jpg?width=750&height=320'
          },
          {
            href: 'home4',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t15319/108/2219346343/51321/ff7f0222/5a7d6304N18d6ae39.jpg?width=750&height=320'
          }
        ],
        enters: [
          {
            href:'home',
            img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
            title: '优惠券'
          },
          {
            href:'home1',
            img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
            title: '优惠券'
          },
          {
            href:'home2',
            img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
            title: '优惠券'
          },
          {
            href:'home3',
            img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
            title: '优惠券'
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/element";
  .slider {
    margin-top: 120px;
    img {
      width: 100%;
    }
  }
  .list {
    @include list(row);
    background: #fff;
    padding-bottom: 20px;
    padding-top: 40px;
    justify-content: space-around;
    a {
      text-decoration: none;
    }
    .item {
      text-align: center;
      img{
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4 {
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>
