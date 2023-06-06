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
      d="M32 56C51.764 56 56 51.764 56 32C56 12.236 51.764 8 32 8C12.236 8 8 12.236 8 32C8 51.764 12.236 56 32 56Z"
      stroke="#ACE3FF"
      stroke-width="2"
    />
    <path
      class="stick"
      d="M42.6665 32L21.3332 32"
      stroke="#ACE3FF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      class="tip"
      d="M34.6667 24L42.4346 31.768C42.5628 31.896 42.5628 32.104 42.4346 32.232L34.6667 40"
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
  name: "sliderRight",
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
