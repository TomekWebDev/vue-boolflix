<template>
  <div class="bg-dark">
    <FilmList :arrayResultMovies="arrayResultMovies" />
  </div>
</template>

<script>
import FilmList from "./FilmList.vue";

export default {
  name: "MainComp",
  components: {
    FilmList,
  },
  props: {
    arrayResultMovies: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>