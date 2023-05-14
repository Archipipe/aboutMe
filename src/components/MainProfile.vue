<template>
  <div class="mainProfile">
    <div class="mainProfileInner">
      <div class="mainProfileTitle">
        <div><span>Репетитор ЕГЭ/ОГЭ</span><span>по информатике</span></div>
        <nav>
          <img :src="vkIcon" /><img :src="telegramIcon" /><img
            :src="skypeIcon"
          />
        </nav>
      </div>
      <div class="mainProfileImage">
        <img :src="photoPlaceholder" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import vkIcon from "@/assets/SocialImages/vk_round_icon.svg";
import telegramIcon from "@/assets/SocialImages/telegram_round_icon.svg";
import skypeIcon from "@/assets/SocialImages/skype_round_icon.svg";
import photoPlaceholder from "@/assets/SocialImages/photoPlaceholder.svg";

export default defineComponent({
  name: "MainProfile",
  setup() {
    return { vkIcon, telegramIcon, skypeIcon, photoPlaceholder };
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
  height: 50vh;
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
    margin-bottom: 2%;
    & > span {
      display: block;
    }
  }
  & > nav {
    display: flex;
    justify-content: center;
    gap: 20%;

    & > img {
      width: 40px;
      height: auto;
      cursor: pointer;
    }
  }
}
</style>
