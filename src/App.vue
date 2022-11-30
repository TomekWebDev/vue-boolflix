<template>
  <div id="app" class="">
    <HeaderComp @searchTextHeader="searchMovie" />
    <MainComp
      :movieResultsArray="movieResults"
      :tvShowResultsArray="tvShowResults"
    />
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
      baseUri: "https://api.themoviedb.org/3/search/",
      movieUrlSelector: "movie?api_key=",
      tvShowUrlSelector: "tv?api_key=",
      apiKey: "d898f94bef33f317898b95a79164569c",
      parameter: "&query=",
      movieSearchQueryUrl: "",
      tvShowSearchQueryUrl: "",
      movieResults: [],
      tvShowResults: [],
    };
  },
  mounted() {},
  methods: {
    searchMovie(searchTextHeader) {
      this.searchTextFromHeaderToApp = searchTextHeader;

      this.movieSearchQueryUrl =
        this.baseUri +
        this.movieUrlSelector +
        this.apiKey +
        this.parameter +
        this.searchTextFromHeaderToApp;

      this.tvShowSearchQueryUrl =
        this.baseUri +
        this.tvShowUrlSelector +
        this.apiKey +
        this.parameter +
        this.searchTextFromHeaderToApp;

      axios.get(this.movieSearchQueryUrl).then((response) => {
        this.movieResults = response.data.results;
      });

      axios.get(this.tvShowSearchQueryUrl).then((response) => {
        this.tvShowResults = response.data.results;
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
