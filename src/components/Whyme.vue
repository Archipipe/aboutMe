<template>
  <div class="Whyme">
    <div class="left">
      <div>Почему тебе стоит выбрать меня?</div>

      <ol>
        <li>
          <span
            >1
            <div></div>
          </span>
          <span> <div>Сдал ЕГЭ на 93 балла самостоятельно</div></span>
        </li>
        <li>
          <span
            >2
            <div></div></span
          ><span><div>Найду подход к любому ученику</div></span>
        </li>
        <li>
          <span
            >3
            <div></div></span
          ><span
            ><div>
              Дам уникальные шаблоны для решения задач с программированием
            </div></span
          >
        </li>
        <li>
          <span
            >4
            <div></div
          ></span>
          <span
            ><div>
              Изобрел работающую методику для обучения учеников с любым уровнем
              знаний
            </div></span
          >
        </li>
      </ol>
    </div>
    <div class="right">
      <img :src="WhymeImage" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WhymeImage from "@/assets/Backgrounds/Whyme.png";

export default defineComponent({
  name: "Whyme",

  setup() {
    return { WhymeImage };
  },
});
</script>

<style lang="scss" scoped>
.Whyme {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10% 20%;
}

.left {
  & > div:first-of-type {
    font-size: 30px;
    font-weight: 600;
    width: max-content;
  }

  ol {
    list-style-type: none;
    padding: 10% 10%;
  }

  li {
    display: flex;
    height: auto;
    font-size: 128px;
    height: 1em;

    span:last-of-type {
      width: 100%;
      font-size: 20px;
      position: relative;
      & > div {
        position: absolute;
        top: 50%;
        width: 100%;
      }
    }

    span:first-of-type {
      text-align: left;
      width: 1em;

      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      color: white;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;

      position: relative;

      & > div {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0, -30%);
        width: 70%;
        border-radius: 50%;
        background-color: #abe2ffad;

        &::after {
          content: "";
          padding-bottom: 100%;
          display: block;
        }
      }
    }
  }
}

.right {
  display: flex;
  align-items: center;
}
</style>
