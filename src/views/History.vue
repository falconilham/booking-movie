<template>
  <div class="w-100">
    <div class="px-2">
      <div class="-mx-2">
        <div
          class="h-100 grid px-5 mb-2 justify-center grid-cols-2 gap-2"
          v-for="item in listBooking"
          v-bind:key="item"
        >
          <img :src="item.Poster" :alt="item.title" />
          <div>
            <div>{{ item.Title }}</div>
            <div class="flex">
              <span class="mr-2">Seats:</span>
              <div v-for="(i, id) in item.selectedSeats" v-bind:key="i">
                <span v-if="id === item.selectedSeats.length - 1">{{ i }}</span>
                <span v-else>{{ i }},</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useMovieStore } from "../stores/movie";
export default {
  name: "History",
  data() {
    return {
      listBooking: [],
    };
  },
  setup() {
    const movieStore = useMovieStore();
    return { movieStore };
  },
  methods: {
    async getListBookingWithDetail() {
      // const movie = this.movieStore.movies.find(({ imdbID }) => imdbID === id);
      const moviesBooking = await Promise.all(
        this.movieStore.listBooking.map(async ({ imdbID, ...rest }) => {
          const detail = this.movieStore.movies.find(
            (item) => item.imdbID === imdbID
          );
          if (!detail) {
            const data = await this.getMovieDetail(imdbID);
            const newData = {
              ...data,
              ...rest,
            };
            return newData;
          } else {
            return {
              ...detail,
              ...rest,
            };
          }
        })
      );
      this.listBooking = moviesBooking;
    },
    async getMovieDetail(imdbID) {
      const getDetailData = await this.movieStore.getMovie(imdbID);
      return getDetailData;
    },
  },
  mounted() {
    this.getListBookingWithDetail();
  },
};
</script>
