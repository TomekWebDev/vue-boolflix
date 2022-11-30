<template>
  <div class="d-flex py-5 film-list">
    <TvShowCardComp
      class="cardio my-2 mx-1"
      v-for="(elem, index) in movieResultsArray"
      :key="index"
      :movieObj="elem"
    />
    <TvShowCardComp />
  </div>
</template>

<script>
import TvShowCardComp from "./TvShowCardComp.vue";

export default {
  name: "TvShowList",
  components: {
    TvShowCardComp,
  },
  props: {
    movieResultsArray: Array,
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