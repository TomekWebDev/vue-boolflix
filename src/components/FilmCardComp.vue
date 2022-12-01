<template>
  <div class="card-hover-trigger d-flex">
    {{ starsRating() }}

    <img
      class="movie-img"
      :src="`http://image.tmdb.org/t/p/w342/${movieObj.poster_path}`"
      alt=""
    />
    <div class="movie-info bg-black">
      <img
        class="w-100"
        :src="`http://image.tmdb.org/t/p/w342/${movieObj.backdrop_path}`"
        alt=""
      />
      <div class="movie-detail">{{ movieObj.title }}</div>
      <div class="movie-detail fs-6 fw-light">
        {{ movieObj.original_title }}
      </div>
      <div class="movie-detail fs-6 fw-light text-center">
        <span v-if="movieObj.original_language == 'it'" class="d-block"
          >Original language: 🇮🇹</span
        >
        <span v-else-if="movieObj.original_language == 'en'" class="d-block"
          >Original language:🇺🇸</span
        >
        <span v-else class="d-block">Original language:🇦🇮</span>
        <span class="">Vote: </span>
        <span v-if="movieObj.vote_average < 5.5" class="text-danger">
          {{ movieObj.vote_average }}/10
        </span>
        <span
          v-if="movieObj.vote_average > 5.5 && movieObj.vote_average < 6.5"
          class="text-warning"
        >
          {{ movieObj.vote_average }}/10
        </span>
        <span
          v-if="movieObj.vote_average > 6.5 && movieObj.vote_average < 7.5"
          class="text-success"
        >
          {{ movieObj.vote_average }}/10
        </span>
        <span
          v-if="movieObj.vote_average > 7.5"
          class="text-success fs-5 fw-bold"
        >
          {{ movieObj.vote_average }}/10
        </span>
        <div class="stars">
          <div
            class="d-inline"
            v-for="n in fullStars"
            :key="'movieFullStarsKey' + n"
          >
            <font-awesome-icon icon="fa-solid fa-star" />
          </div>

          <div class="d-inline" v-if="halfStar == true">
            <font-awesome-icon icon="fa-regular fa-star-half-stroke" />
          </div>

          <div
            class="d-inline"
            v-for="n in emptyStars"
            :key="'movieEmptyStarsKey' + n"
          >
            <font-awesome-icon icon="fa-regular fa-star" />
          </div>
        </div>
        <div v-for="elem in thisMovieGenresNameArray" :key="elem">
          {{ elem }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmCardComp",
  data() {
    return {
      halfVote: 0,
      fullStars: 0,
      emptyStars: 0,
      halfStar: false,
      thisMovieGenresArray: this.movieObj.genre_ids, // sono solo gli id dei generi
      thisMovieGenresNameArray: [],
    };
  },
  props: {
    movieObj: Object,
    movieGenresListArray: Array, // legenda dei generi: array con dentro oggetti con 2 proprietà (id e nome)
  },
  methods: {
    starsRating() {
      // divido per 2 il voto medio
      this.halfVote = this.movieObj.vote_average / 2;

      // controllo se il voto a metà è un numero intero o no

      // se non è intero devo considerare che c'è una stella mezza piena quindi la variabile andrà su true per indicarne la presenza
      // le stelle piene saranno contate sulla base del voto a metà per difetto (perchè dopo c'è la mezza)
      // le stelle vuote sono 5 - le piene - una stella a metà
      if (this.halfVote != Math.floor(this.halfVote)) {
        this.halfStar = true;
        this.fullStars = Math.floor(this.halfVote);
        this.emptyStars = 5 - this.fullStars - 1;
      }
      // in questo caso non c'è nessuna mezza stella
      else {
        this.halfStar = false;
        this.fullStars = this.halfVote;
        this.emptyStars = 5 - this.fullStars;
      }
    },
    convertGenresIdToNames() {
      for (let a = 0; a < this.thisMovieGenresArray.length; a++) {
        let genre = this.thisMovieGenresArray[a];
        // console.log(genre);
        for (let j = 0; j < this.movieGenresListArray.length; j++) {
          let genreObj = this.movieGenresListArray[j];
          let genreID = genreObj.id;
          let genreName = genreObj.name;

          if (genre == genreID) {
            this.thisMovieGenresNameArray.push(genreName);
          }

          // console.log(genreID, genreName);
        }
      }
    },
  },
  mounted() {
    this.convertGenresIdToNames();
  },
};
</script>

<style lang="scss" scoped>
.card-hover-trigger {
  width: 200px;
}
.movie-img {
  width: 200px;
}

.card-hover-trigger:hover .movie-img {
  display: none;
}
.movie-info {
  display: none;
  width: 200px;

  height: 100%;
  border: 1px solid white;
}
.card-hover-trigger:hover .movie-info {
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 200px;
  height: 100%;
}
.movie-detail {
  font-weight: 700;
}
</style>