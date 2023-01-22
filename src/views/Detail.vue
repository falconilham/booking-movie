<template>
  <div v-if="!movieStore.loading" class="h-full flex flex-col justify-between">
    <div class="grid gap-y-5">
      <img
        :src="movieDetail.Poster"
        :alt="movieDetail.title"
        class="justify-self-center"
      />
      <span class="lg:text-3xl font-bold">{{ movieDetail.Title }}</span>
      <span class="lg:text-3xl">{{ movieDetail.Plot }}</span>
    </div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-full mt-2"
      @click="$router.push(`/book/${$route.params.id}`)"
    >
      Book
    </button>
  </div>
  <div v-else class="h-full flex items-center justify-center">
    <Loading :loading="movieStore.loading" />
  </div>
</template>
<script>
import { useMovieStore } from "../stores/movie";
import Loading from "../components/Loading.vue";
export default {
  name: "Detail",
  data() {
    return {
      movieDetail: {},
    };
  },
  components: {
    Loading,
  },
  setup() {
    const movieStore = useMovieStore();
    return { movieStore };
  },
  methods: {
    async getDetail(imdbID) {
      const getDetailData = await this.movieStore.getMovie(imdbID);
      this.movieDetail = getDetailData;
    },
  },
  mounted() {
    const imdbID = this.$route.params.id;
    this.getDetail(imdbID);
  },
};
</script>
