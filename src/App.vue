<template><ContactNavBar /></template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactNavBar from "./components/ContactNavBar.vue";

export default defineComponent({
  name: "App",
  components: {
    ContactNavBar,
  },
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comme:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap");

*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Montserrat", sans-serif;
}
</style>
