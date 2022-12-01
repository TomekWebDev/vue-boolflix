<template>
  <div class="bg-dark">
    <FilmList
      :movieResultsArray="movieResultsArray"
      :movieGenresListArray="movieGenresListArray"
    />
    <TvShowList
      :tvShowResultsArray="tvShowResultsArray"
      :tvShowGenresListArray="tvShowGenresListArray"
    />
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
    movieGenresListArray: Array,
    tvShowGenresListArray: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>