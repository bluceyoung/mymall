<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default{
    name:"TabBarItem",
    props:{
      link:String,
      activeColor:{
        type:String,
        default:"#1296db"
      }
    },
    data(){
      return {
        // isActive:true
      }
    },
    computed:{
      isActive(){
        if(this.$route.path.indexOf(this.link)>-1){
          return true;
        }else{
          return false;
        }
      },
      activeStyle(){
        const style={};
        style.color=(this.isActive)?this.activeColor:"black"
        return style;
      }
    },
    methods:{
      itemClick(){
        console.log(this.$route.link)
        this.$router.push(this.link)
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 0.5rem;
    margin-top: 0.1875rem;
  }
  .tab-bar-item img{
    width: 1.5rem;
    height: 1.5rem;
  }

</style>
