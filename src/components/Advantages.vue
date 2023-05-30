<template>
  <div class="Advantages">
    <div>Ученики, которые смогли...</div>
    <div>
      <div>
        <img :src="cool" v-motion-pop-visible-once />
        <span>Сдать ЕГЭ на высшем уровне</span>
      </div>
      <div>
        <img :src="grad" v-motion-pop-visible-once />
        <span>Поступить в лучшие ВУЗы страны</span>
      </div>
      <div>
        <img :src="bulb" v-motion-pop-visible-once />
        <span>Получить навыки программирования</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import cool from "@/assets/AdvEmotes/cool.svg";
import grad from "@/assets/AdvEmotes/grad.svg";
import bulb from "@/assets/AdvEmotes/bulb.svg";

export default defineComponent({
  name: "Advantages",
  setup() {
    return { cool, grad, bulb };
  },
});
</script>

<style lang="scss" scoped>
.Advantages {
  width: 100%;
  height: 38vh;
  background-image: url("@/assets/Backgrounds/AdvantagesBack.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20%;
  margin-bottom: 10%;

  & > div:first-of-type {
    font-size: 30px;
    font-weight: 600;
  }
  & > div:last-of-type {
    display: flex;
    justify-content: space-evenly;
    & > div {
      text-align: center;
      width: 11em;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > img {
        margin: 30% 0 10% 0;
      }
    }
  }
}
</style>
