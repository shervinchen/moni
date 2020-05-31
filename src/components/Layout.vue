<template>
  <div class="layout-wrapper" :class="classPrefix && `${classPrefix}-wrapper`">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class Layout extends Vue {
  @Prop({ type: String, default: "" }) readonly classPrefix!: string;
}
</script>

<style lang="scss" scoped>
.layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  // min-height: 100vh;
}
.content {
  flex-grow: 1;
  overflow: auto;
}
</style>
