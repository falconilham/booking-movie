<template>
  <div v-if="!isInHome" class="w-full">
    <div @click="$router.go(-1)" class="w-10 p-1">
      <!-- <img src="https://img.icons8.com/sf-black/64/null/long-arrow-left.png" /> -->
      <!-- <span class="font-extrabold text-8xl">{{ "<" }}</span> -->
      <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24">
        >
        <path
          d="M19,11H9l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z"
        />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    GenerateURL() {
      var fullUrl = this.$route.path;
      return fullUrl;
    },
  },
  computed: {
    isInHome: function () {
      return this.GenerateURL() === "/";
    },
  },
};
</script>
