<template>
  <div class="introduction">
    <div class="left">
      <div>
        <span>Привет, меня зовут</span>
        <h2>Зимин Игнат</h2>
        <span>Репетитор Егэ по информатике</span>
      </div>
      <button>Оставить заявку</button>
    </div>
    <div class="right">
      Подготовлю к ЕГЭ/ОГЭ по информатике. Обучу языку программирования Пайтон.
      В доступной форме разберем все задания. Провожу занятия на удобной для вас
      площадке.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Introduction",
});
</script>

<style lang="scss">
.introduction {
  width: 100%;
  height: 35vh;
  background-color: $main_color;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
  & > div {
    flex: 1 1 0px;
  }
}

.left {
  font-size: 18px;

  h2 {
    font-size: 40px;
    font-weight: normal;
  }
  button {
    text-transform: uppercase;
    font-size: 14px;
    border: none;
    padding: 5px 20px;
    box-sizing: content-box;
    background-color: $button_default;
    border-radius: 60px;
  }
}
</style>
