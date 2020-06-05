<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name:"TabBar",
    components:{
    }
  }
</script>

<style>
  #tab-bar{
    display: flex;
    background-color: #ccc;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0px -10px 30px #ccc;
  }

</style>
