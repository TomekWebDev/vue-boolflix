<template>
  <div class="d-flex py-2 overflow-auto">
    <FilmCardComp
      class="cardio border border-2 border-dark my-2"
      v-for="(elem, index) in arrayResultMovies"
      :key="index"
      :movieObj="elem"
    />
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
.cardio {
  width: 342px;
}
</style>