<template>
  <div class="card-hover-trigger d-flex">
    <img
      class="movie-img"
      :src="`http://image.tmdb.org/t/p/w342/${movieObj.poster_path}`"
      alt=""
    />
    <div class="movie-info py-5">
      <div class="movie-detail">{{ movieObj.title }}</div>
      <div class="movie-detail">{{ movieObj.original_title }}</div>
      <div class="movie-detail">{{ movieObj.original_language }}</div>
      <div class="movie-detail">{{ movieObj.vote_average }}</div>
      <div>
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmCardComp",
  data() {
    return {
      fullStars: 0,
      emptyStars: 0,
    };
  },
  props: {
    movieObj: Object,
  },
  methods: {
    starsRating() {
      this.fullStars = Math.round(this.movieObj.vote_average / 2);
      console.log(this.stars);
      this.emptyStars = 5 - this.fullStars;
      console.log(this.emptyStars);
    },
  },
  mounted() {
    this.starsRating();
  },
};
</script>

<style lang="scss" scoped>
.card-hover-trigger {
  width: 342px;
}

.card-hover-trigger:hover .movie-img {
  display: none;
}
.movie-info {
  display: none;
  width: 342px;
  padding: 1rem;
  height: 100%;
}
.card-hover-trigger:hover .movie-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 342px;
  height: 100%;
}
.movie-detail {
  font-weight: 700;
}
</style>