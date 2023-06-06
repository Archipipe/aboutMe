<template>
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="back"
      stroke="#ACE3FF"
      d="M32 56C12.236 56 8 51.764 8 32C8 12.236 12.236 8 32 8C51.764 8 56 12.236 56 32C56 51.764 51.764 56 32 56Z"
      stroke-width="2"
    />
    <path
      class="stick"
      d="M21.3335 32L42.6668 32"
      stroke="#ACE3FF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="tip"
      d="M29.3333 24L21.5654 31.768C21.4372 31.896 21.4372 32.104 21.5654 32.232L29.3333 40"
      stroke="#ACE3FF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "sliderLeft",
});
</script>

<style lang="scss" scoped>
.back {
  fill: #fffff000;
  stroke: #ace3ff;
  transition: fill 0.2s ease, stroke 0.2s ease;
}

.tip {
  transition: stroke 0.2s ease;
}

.stick {
  transition: stroke 0.2s ease;
}

svg:hover {
  .back {
    stroke: #fffff000;
    fill: $main_color;
  }
  .tip {
    stroke: $button_hover;
  }
  .stick {
    stroke: $button_hover;
  }
}

svg:active {
  outline: none;

  .back {
    fill: $mainBitIntensive_color;
    transition: stroke 0.05s ease;
  }
  .tip {
    stroke: $intensive;
    transition: stroke 0.05s ease;
  }
  .stick {
    stroke: $intensive;
    transition: stroke 0.05s ease;
  }
}
</style>
