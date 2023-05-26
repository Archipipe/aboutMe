<template>
  <swiper
    :navigation="true"
    @swiper="onSwiper"
    :modules="modules"
    :slidesPerView="3"
    :spaceBetween="30"
    :loop="true"
    class="mySwiper"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
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
import sliderLeft from "@/components/Reviews/sliderLeft.vue";
import sliderRight from "@/components/Reviews/sliderRight.vue";
import { ref } from "vue";

import { Navigation } from "swiper";

const modules = [Navigation];

const swiperRef = ref();
const onSwiper = (swiper: any) => {
  swiperRef.value = swiper;
  console.log(swiperRef.value);
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
