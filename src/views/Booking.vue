<template>
  <div class="flex justify-between flex-col h-full">
    <div>
      <div class="border-gray-500 h-auto text-center border-2 mb-5">Screen</div>
      <div
        class="grid grid-cols-5 gap-5 mb-5"
        v-for="row in 3"
        v-bind:key="row"
      >
        <button
          class="border-gray-500 border-2 text-center"
          v-for="col in 5"
          v-bind:key="col"
          @click="addSelectedSeat(`${String.fromCharCode(row + 64)}${col}`)"
          :disabled="selectedSeat.length >= total"
          :class="
            selectedSeat.some(
              (item) => item === `${String.fromCharCode(row + 64)}${col}`
            ) && 'text-white bg-blue-500 border-0'
          "
        >
          {{ `${String.fromCharCode(row + 64)}${col}` }}
        </button>
      </div>
    </div>
    <div class="flex justify-between">
      <input
        type="number"
        id="quantity"
        name="quantity"
        min="1"
        max="5"
        class="py-2 px-4 w-1/3"
        v-model="total"
        step="1"
        required
      />
      <button
        class="text-white font-bold py-2 px-4 rounded w-full col-span-full mt-2 self-end"
        :class="disabled ? 'bg-slate-300' : 'bg-blue-500 hover:bg-blue-700'"
        placeholder="total"
        @click="bookThisMovie"
        :disabled="disabled"
      >
        Select
      </button>
    </div>
  </div>
</template>
<script>
import { useMovieStore } from "../stores/movie";
import Dropdown from "../components/Dropdown.vue";
export default {
  name: "Booking",
  data() {
    return {
      total: 0,
      selectedSeat: [],
    };
  },
  computed: {
    disabled() {
      return this.total === 0 || this.total !== this.selectedSeat.length;
    },
  },
  watch: {
    total(currentValue, PrevValue) {
      if (currentValue !== PrevValue) {
        this.selectedSeat = [];
      }
      if (currentValue > 5 || currentValue < 1) {
        this.total = currentValue < 1 ? 1 : 5;
      }
    },
  },
  components: {
    Dropdown,
  },
  setup() {
    const movieStore = useMovieStore();
    return { movieStore };
  },
  methods: {
    addSelectedSeat(seat) {
      const alreadySelected = this.selectedSeat.some((item) => item === seat);
      if (alreadySelected) {
        this.selectedSeat = this.selectedSeat.filter((item) => item !== seat);
      } else {
        this.selectedSeat = [...this.selectedSeat, seat];
      }
    },
    bookThisMovie() {
      if (this.total === this.selectedSeat.length) {
        const createBookingObj = {
          id: this.movieStore.listBooking.length + 1,
          imdbID: this.$route.params.movieId,
          selectedSeats: this.selectedSeat,
        };
        this.movieStore.setBooking(createBookingObj);
        this.$router.push("/history");
      }
    },
  },
};
</script>
