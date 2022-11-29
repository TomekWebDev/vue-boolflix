<template>
  <div id="app">
    <HeaderComp @searchTextHeader="searchMovie" />
    <MainComp />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import MainComp from "./components/MainComp.vue";

export default {
  name: "App",
  components: {
    HeaderComp,
    MainComp,
  },
  data() {
    return {
      searchTextFromHeaderToApp: "",
    };
  },
  mounted() {},
  methods: {
    searchMovie(searchTextHeader) {
      this.searchTextFromHeaderToApp = searchTextHeader;
      console.log(searchTextHeader);
    },
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
}
</style>
