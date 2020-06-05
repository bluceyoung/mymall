<template>
  <tab-bar>
   <tab-bar-item link="/home">
     <img slot="item-icon" src="@/assets/img/tabbar/home.svg" />
     <img slot="item-icon-active" src="@/assets/img/tabbar/home_a.svg" />
      <div slot="item-text">首页</div>
   </tab-bar-item>
   <tab-bar-item link="/calendar">
     <img slot="item-icon" src="@/assets/img/tabbar/calendar.svg" />
     <img slot="item-icon-active" src="@/assets/img/tabbar/calendar_a.svg" />
      <div slot="item-text">日历</div>
   </tab-bar-item>
   <tab-bar-item link="/smalllist">
     <img slot="item-icon" src="@/assets/img/tabbar/smalllist.svg" />
     <img slot="item-icon-active" src="@/assets/img/tabbar/smalllist_a.svg" />
      <div slot="item-text">列表</div>
   </tab-bar-item>
   <tab-bar-item link="/user">
     <img slot="item-icon" src="@/assets/img/tabbar/user.svg" />
     <img slot="item-icon-active" src="@/assets/img/tabbar/user_a.svg" />
      <div slot="item-text">我的</div>
   </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar.vue'
  import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'
  export default {
    name:"MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
