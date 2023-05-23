<template>
  <div class="Slide">
    <div class="content">
      <img :src="image" />
      <span>{{ title }} {{ id }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "CarouselSlide",
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    image: { type: String as PropType<string>, required: true },
    id: Number as PropType<number>,
  },
});
</script>
<style lang="scss" scoped>
.Slide {
  position: relative;
  min-width: 21.25%;
  border-radius: 45px;
  background-color: $main_color;
  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
}
.content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10% 10% 20%;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    align-self: center;
    margin-bottom: 10%;
  }
}
</style>
