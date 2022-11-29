<template>
  <div>
    <FilmCardComp :arrayResultMovies="arrayResultMovies" />
  </div>
</template>

<script>
import FilmCardComp from "./FilmCardComp.vue";

export default {
  name: "FilmList",
  components: {
    FilmCardComp,
  },
  props: {
    arrayResultMovies: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>