<template>
  <div id="app" class="">
    <HeaderComp @searchTextHeader="searchMovie" />
    <MainComp
      :movieResultsArray="movieResults"
      :tvShowResultsArray="tvShowResults"
      :movieGenresListArray="movieGenresList"
      :tvShowGenresListArray="tvShowGenresList"
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
      movieGenresList: [],
      tvShowGenresList: [],
    };
  },
  mounted() {
    this.getGenresList();
  },
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
    getGenresList() {
      axios
        .get(
          "https://api.themoviedb.org/3/genre/movie/list?api_key=d898f94bef33f317898b95a79164569c"
        )
        .then((response) => {
          this.movieGenresList = response.data.genres;
        });
      axios
        .get(
          "https://api.themoviedb.org/3/genre/tv/list?api_key=d898f94bef33f317898b95a79164569c"
        )
        .then((response) => {
          this.tvShowGenresList = response.data.genres;
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
