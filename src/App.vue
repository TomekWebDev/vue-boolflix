<template>
  <div id="app">
    <HeaderComp @searchTextHeader="searchMovie" />
    <MainComp :arrayResultMovies="risultato" />
  </div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import MainComp from "./components/MainComp.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    HeaderComp,
    MainComp,
  },
  data() {
    return {
      searchTextFromHeaderToApp: "",
      searchQueryUrl: "",
      risultato: [],
    };
  },
  mounted() {},
  methods: {
    searchMovie(searchTextHeader) {
      this.searchTextFromHeaderToApp = searchTextHeader;
      this.searchQueryUrl =
        "https://api.themoviedb.org/3/search/movie?api_key=d898f94bef33f317898b95a79164569c&query=" +
        this.searchTextFromHeaderToApp;

      axios.get(this.searchQueryUrl).then((response) => {
        this.risultato = response.data.results;
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
