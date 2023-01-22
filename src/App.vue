<template>
  <div class="flex flex-col h-full">
    <Header />
    <div class="px-10 py-5 h-full">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    RouterView,
    Header,
  },
};
</script>
