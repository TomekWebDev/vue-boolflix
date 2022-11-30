<template>
  <div class="d-flex py-5 film-list">
    <FilmCardComp
      class="cardio my-2 mx-1"
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
  width: 200px;
}
.cardio:hover {
  scale: 1.2;
  transition: all 0.2s;
}
.film-list {
  overflow-x: scroll;
}
</style>