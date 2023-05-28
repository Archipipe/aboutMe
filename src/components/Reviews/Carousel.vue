<template>
  <swiper
    @swiper="onSwiper"
    :modules="modules"
    :loop="true"
    :slidesPerView="4"
    :spaceBetween="30"
    class="mySwiper"
  >
    <swiper-slide class="slideElement" v-for="(slide, idx) in SlideArray"
      ><Slide :title="slide.title" :image="slide.image" :key="idx"
    /></swiper-slide>
  </swiper>
  <div class="SliderButton">
    <sliderLeft @click="slide('prev')" />
    <sliderRight @click="slide('next')" />
  </div>
</template>
<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import sliderLeft from "./sliderLeft.vue";
import sliderRight from "./sliderRight.vue";
import { defineProps, PropType, ref, reactive } from "vue";
import Slide from "@/components/Reviews/CarouselSlide.vue";

import { Navigation } from "swiper";

const modules = [Navigation];

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
const swiperRef = ref();
const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
};

const slide = (dir: "prev" | "next") => {
  switch (dir) {
    case "prev":
      swiperRef.value.slidePrev();
      return;
    case "next":
      swiperRef.value.slideNext();
  }
};
</script>

<style lang="scss">
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
