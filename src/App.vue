
<template>
  <div id="app">
    <Navigation />
  </div>
</template>

<script>
import Navigation from "./components/Global/Navigation.vue";
export default {
  name: "app",
  components: {
    Navigation,
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>