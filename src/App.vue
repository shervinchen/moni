<template>
  <div id="app">
    <router-view/>
    <div class="code-wrapper" v-show="isCodeVisible">
      <div class="tip">请使用手机扫码打开本页面</div>
      <img class="code" src="./assets/code.png" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import isPC from '@/lib/isPC'

@Component
export default class App extends Vue {
  isCodeVisible = false

  mounted() {
    this.isCodeVisible = isPC() ? true : false
  }
}
</script>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

body {
  font-family: $font-hei;
  line-height: 1.5;
  font-size: 16px;
  color: #333;
  background: #f5f5f5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<style lang="scss" scoped>
.code-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  > .tip {
    position: fixed;
    z-index: 2;
    top: 30%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    color: #fff;
  }
  > .code {
    position: fixed;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 256px;
    height: 256px;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>