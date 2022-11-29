<template>
  <div class="d-flex flex-wrap justify-content-around p-4">
    <div
      class="card p-1 border border-1 border-success my-2"
      v-for="(elem, index) in arrayResultMovies"
      :key="index"
    >
      <div>{{ elem.title }}</div>
      <div>{{ elem.original_title }}</div>
      <div>{{ elem.original_language }}</div>
      <div>{{ elem.vote_average }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmCardComp",
  props: {
    arrayResultMovies: Array,
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: calc(90% / 5);
  aspect-ratio: 1 / 1;
}
</style>