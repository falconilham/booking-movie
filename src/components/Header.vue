<template>
  <div v-if="!isInHome" class="w-full">
    <div @click="backButton" class="w-10 p-1">
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
    backButton() {
      if (this.$route.path === "/history") {
        this.$router.push("/");
      } else {
        this.$router.go(-1);
      }
    },
  },
  computed: {
    isInHome: function () {
      return this.GenerateURL() === "/";
    },
  },
};
</script>
