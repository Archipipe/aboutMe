<template>
  <ContactNavBar /><MainProfile /><Introduction /><Whyme /><Advantages /><Review /><SignUp />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactNavBar from "./ContactNavBar.vue";
import MainProfile from "./MainProfile.vue";
import Introduction from "./Introduction.vue";
import Whyme from "./Whyme.vue";
import Advantages from "./Advantages.vue";
import Review from "./Reviews/Review.vue";
import SignUp from "./Signup.vue";

export default defineComponent({
  name: "Main",
  components: {
    ContactNavBar,
    MainProfile,
    Introduction,
    Whyme,
    Advantages,
    Review,
    SignUp,
  },
});
</script>
