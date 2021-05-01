<template>
  <div id="app">
    
    <transition name="router-anim" enter-active-class="animated slideInLeft" >
   <router-view/>
</transition>
  </div>
</template>

<script>


export default {
  name: "App",
 
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


}


</style>
