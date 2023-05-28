<template>
  <div class="Reviews">
    <h2>Отзывы</h2>
    <div class="carousel">
      <Slider :data="Slides" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import Image from "@/assets/ReviewImages/Image.png";
import Slider from "./Carousel.vue";

interface ISlide {
  title: string;
  image: string;
}

export default defineComponent({
  name: "Reviews",
  components: {
    Slider,
  },

  setup() {
    let Slides: ISlide[] = reactive([
      {
        title:
          "Помог с вступительными экзаменами в институт. Остались только хорошие впечатления.",
        image: Image,
      },
      {
        title:
          "Хороший репетитор, помог сдать на 86 баллов. Приятный собеседник, всем советую записаться.",
        image: Image,
      },
      {
        title:
          "Были проблемы с написанием кода для решения ЕГЭ. Все быстро разобрали. ",
        image: Image,
      },
      {
        title: "Все четко и по делу. Спасибо за твой труд.",
        image: Image,
      },

      {
        title:
          "Сперма на вкус как яичный белок Кто бы что ни говорил, а в анал — это ок Пусть так, пусть для вас это пустяк Когда я вижу мужика — у меня стояк",
        image: Image,
      },

      {
        title: "Я мажу жопу вазелином я так люблю",
        image: Image,
      },
      {
        title: "Я буквально отсосал этому человеку, советую",
        image: Image,
      },

      {
        title:
          "Сперма на вкус как яичный белок Кто бы что ни говорил, а в анал — это ок Пусть так, пусть для вас это пустяк Когда я вижу мужика — у меня стояк",
        image: Image,
      },
    ]);
    return { Image, Slides };
  },
});
</script>
<style lang="scss" scoped>
.Reviews {
  width: 100%;
  padding: 0 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10%;
  user-select: none;
  & > h2 {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 2%;
  }
}

.carousel {
  width: 100%;
  align-self: center;
  overflow: hidden;
}
</style>
