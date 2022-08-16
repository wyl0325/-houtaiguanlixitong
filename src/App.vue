<template>
  <div id="app">
  <!-- <img alt="Vue logo" src="./assets/logo.png">
<HelloWorld msg="Welcome to Your Vue.js"></HelloWorld> -->
<!-- <LoginName></LoginName> -->
   <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import LoginName from './components/Login.vue'

export default {
    name: "App",
    // components: { LoginName }
}
</script>

<style lang="less">
html,body{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;

}

</style>
