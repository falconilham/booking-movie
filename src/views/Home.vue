<template>
  <div class="w-100">
    <div class="px-2">
      <div class="grid grid-cols-2 gap-4">
        <div
          class="flex flex-col justify-between"
          v-for="item in movieStore.movies"
          v-bind:key="item.imdbID"
          @click="$router.push(`detail/${item.imdbID}`)"
        >
          <img :src="item.Poster" :alt="item.title" />
          <span class="text-lg">{{ item.Title }}</span>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-full mt-2"
          @click="$router.push('/history')"
        >
          History
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { useMovieStore } from "../stores/movie";

export default {
  setup() {
    const movieStore = useMovieStore();
    return { movieStore };
  },
  computed: {
    console: () => console,
    window: () => window,
  },
  mounted() {
    this.movieStore.getMovies();
  },
};
</script>
