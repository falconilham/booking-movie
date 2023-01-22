<template>
  <div class="dropdown w-40 items-end flex" id="dropdown-button">
    <button
      class="border-2 font-semibold px-2 rounded flex items-center w-full z-0 justify-between mr-2 z-0"
      v-if="!show"
    >
      <div class="w-full" @click="openDropDown">
        <span class="mr-1">{{ total }}</span>
      </div>
      <div>
        <svg
          class="fill-current h-4 w-4 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          @click="increment"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          @click="decrement"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </button>
    <ul v-if="show" class="dropdown-menu pt-1 absolute w-full">
      <li
        v-for="i in 5"
        v-bind:key="i"
        @click="selectNumber(i)"
        class="border-2 bg-slate-300"
      >
        <a class="rounded-t py-2 px-4 block whitespace-no-wrap text-black">{{
          i
        }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["total"],
  data() {
    return {
      show: false,
    };
  },
  methods: {
    selectNumber(i) {
      this.$emit("changeTotal", i);
      this.show = false;
    },
    openDropDown() {
      console.log("click");
      this.show = true;
    },
    increment() {
      if (this.total === 5) {
        this.$emit("changeTotal", 5);
      } else {
        this.$emit("changeTotal", this.total + 1);
      }
    },
    decrement() {
      if (this.total === 0) {
        this.$emit("changeTotal", 0);
      } else {
        this.$emit("changeTotal", this.total - 1);
      }
    },
  },
};
</script>
