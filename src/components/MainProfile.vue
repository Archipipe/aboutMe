<template>
  <div class="mainProfile">
    <div class="mainProfileInner">
      <div class="mainProfileTitle">
        <div><span>Репетитор ЕГЭ/ОГЭ</span><span>по информатике</span></div>
        <nav><vkIcon /> <telegramIcon /><skypeIcon /></nav>
      </div>
      <div class="mainProfileImage">
        <img :src="photoPlaceholder" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import vkIcon from "@/components/SocialComponents/vkIcon.vue";
import telegramIcon from "@/components/SocialComponents/telegramIcon.vue";
import skypeIcon from "@/components/SocialComponents/skypeIcon.vue";
import photoPlaceholder from "@/assets/SocialImages/photoPlaceholder.svg";

export default defineComponent({
  name: "MainProfile",
  components: { vkIcon, telegramIcon, skypeIcon },
  setup() {
    return { photoPlaceholder };
  },
});
</script>

<style lang="scss">
.mainProfile {
  font-family: "Montserrat", sans-serif;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
  .mainProfileInner {
    width: 60%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
}

.mainProfileTitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 5%;
    user-select: none;
    & > span {
      display: block;
    }
  }
  & > nav {
    display: flex;
    justify-content: center;
    gap: 20%;
  }
}
</style>
