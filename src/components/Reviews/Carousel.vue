<template>
  <div class="Slider" :style="{ transform: `translateX(${sliderMove}%)` }">
    <Slide
      v-for="slide in SlideArray"
      :title="slide.title"
      :image="slide.image"
      :key="slide.id"
      :id="slide.id"
    />
  </div>
  <div class="SliderButton">
    <sliderLeft @click="moveSlider('left')" />
    <sliderRight @click="moveSlider('right')" />
    <button @click="shit()">Нажми</button>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType, ref, reactive } from "vue";
import Slide from "@/components/Reviews/CarouselSlide.vue";
import sliderLeft from "./sliderLeft.vue";
import sliderRight from "./sliderRight.vue";

interface ISlide {
  title: string;
  image: string;
  id: number;
}

const props = defineProps({
  data: {
    type: Array as PropType<ISlide[]>,
    required: true,
  },
});

let SlideArray = reactive(props.data);
let sliderMove = ref(0);
const moveSlider = (direction: "left" | "right"): void => {
  const movePercentage = 26.25;
  switch (direction) {
    case "right":
      sliderMove.value -= movePercentage;
      //SlideArray.push(SlideArray[0]);

      return;
    case "left":
      SlideArray.unshift(SlideArray[SlideArray.length - 1]);
      SlideArray.unshift(SlideArray[SlideArray.length - 2]);
      sliderMove.value += movePercentage;

      //SlideArray.unshift(SlideArray.pop()!);
      return;
  }
};
const shit = () => {
  SlideArray.shift();
};
</script>

<style lang="scss" scoped>
.Slider {
  width: 100%;
  margin-top: 5%;
  display: flex;

  gap: 0 5%;
  transition: transform 0.5s ease;
}

.SliderButton {
  padding-top: 2%;
  margin: 0 auto;
  width: max-content;
  float: none;
  & > svg {
    cursor: pointer;
  }
}
</style>
