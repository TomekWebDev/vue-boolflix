<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <font-awesome-icon icon="fa-solid fa-star" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import headerComp from "./components/headerComp.vue";
import mainComp from "./components/mainComp.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    headerComp,
    mainComp,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
