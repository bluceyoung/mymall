<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物节</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar.vue'
  import HomeSwiper from './children/HomeSwiper.vue'

  import {getHomeMultidata} from '@/network/home'


  export default{
    name:"Home",
    components:{
      NavBar,
       HomeSwiper
    },
    data(){
      return {
        banners:[{image:"https://gw.alicdn.com/imgextra/i2/173/O1CN01fFDZtE1D9H7jk9jYc_!!173-0-lubanu.jpg",link:"#"},
        {image:"https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg",link:"#"},
        {image:"https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg",link:"#"}],
        recommends:[]
      }
    },
    created(){
      // getHomeMultidata().then(res=>{
      //   this.banners=res.data.banner.list
      //   this.recommends=res.data.recommend.list
      // })
    }
  }
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
