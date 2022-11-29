<template>
  <div class="def bg-dark d-flex align-items-center">
    <input
      class="mx-3"
      v-model="searchText"
      type="text"
      placeholder="Search movie..."
      @keyup.enter="$emit('searchTextHeader', searchText)"
    />
  </div>
</template>

<script>
export default {
  name: "HeaderComp",
  props: {},
  data() {
    return {
      searchText: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.def {
  height: 15vh;
}
</style>