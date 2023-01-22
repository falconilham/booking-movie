<template>
  <div>
    <div class="relative">
      <!-- Dropdown toggle button -->
      <button
        @click="show = !show"
        class="flex items-center p-2 text-white rounded-md button-dropdown w-full justify-between"
      >
        <span class="mr-4">Popularity</span>
        <svg
          class="w-5 h-5 text-indigo-100 dark:text-white"
          :class="show && 'origin-center rotate-180'"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <!-- Dropdown menu -->
      <div
        v-show="show"
        class="absolute right-0 py-2 mt-2 bg-black rounded-md shadow-xl w-44 left-0 z-[1] w-full"
      >
        <router-link
          v-for="(item, key) in 5"
          v-bind:key="key"
          to="/"
          class="block px-4 py-2 text-sm text-indigo-100 hover:text-indigo-100 w-max"
        >
          {{ item }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
