<template>
  <div class="introduction" id="About">
    <div class="left">
      <div>
        <span>Привет, меня зовут</span>
        <h2>Зимин Игнат</h2>
        <span>Репетитор Егэ по информатике</span>
      </div>
      <a
        href="#Contact"
        v-smooth-scroll="{
          duration: 1000,
          offset: -50,
        }"
      >
        Оставить заявку
      </a>
    </div>
    <div class="right">
      Подготовлю к ЕГЭ/ОГЭ по информатике. Обучу языку программирования
      <span>Python</span>. В доступной форме разберем все задания. Провожу
      занятия на удобной для вас площадке.
    </div>
  </div>
</template>

<script lang="ts">
import background from "@/assets/Backgrounds/IntroductionBack.png";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Introduction",
  setup() {
    return { background };
  },
});
</script>

<style lang="scss">
.introduction {
  width: 100%;
  height: 35vh;
  background-image: url("@/assets/Backgrounds/IntroductionBack.png");
  background-size: cover;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30%;
}

.left {
  font-size: 18px;

  & > div {
    margin-bottom: 10%;
  }

  h2 {
    transform: translate(0, -5%);
    font-size: 40px;
    font-weight: normal;
  }

  a {
    color: $font_default;
    text-decoration: none;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
    box-sizing: content-box;
    background-color: $button_default;
    border-radius: 60px;
    transition: background-color 0.15s ease, color 0.15s ease;

    &:hover {
      background-color: $button_hover;
      color: white;
    }
  }
}

.right {
  width: 52%; // ХАРДКОД ПИЗДЕЦ
  font-size: 18px;
  span {
    color: $intensive;
  }
}
</style>
