<template>
  <label class="form-item">
    <span class="name">{{this.fieldName}}</span>
    <input type="text" :value="value" @input="onValueChanged($event.target.value)" :placeholder="placeholder" />
  </label>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string;

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  onValueChanged(value: string) {
    this.$emit('update:value', value)
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.form-item {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
