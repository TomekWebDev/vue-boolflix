<template>
  <div class="bg-dark">
    <FilmList :movieResultsArray="movieResultsArray" />
    <TvShowList :tvShowResultsArray="tvShowResultsArray" />
  </div>
</template>

<script>
import FilmList from "./FilmList.vue";
import TvShowList from "./TvShowList.vue";

export default {
  name: "MainComp",
  components: {
    FilmList,
    TvShowList,
  },
  props: {
    movieResultsArray: Array,
    tvShowResultsArray: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>