<template>
  <ul class="types">
    <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  props: {
    propMessage: String,
  },
})
export default class Types extends Vue {
  type = "-";
  helloMsg = 'hello, ' + this.propMessage;
  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.type = type;
  }
  // created() {}
  // mounted() {}
}

// export default {
//   name: 'Types',
//   props: ['xxx'],
//   data() {
//     return {
//       type: '-'
//     }
//   },
//   mounted() {
//     console.log(this.xxx)
//   },
//   methods: {
//     selectType(type) {
//       if (type !== '-' && type !== '+') {
//         throw new Error('type is unknown')
//       }
//       this.type = type
//     }
//   }
// }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
}
</style>
