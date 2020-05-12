<template>
    <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="在这里输入备注" />
    </label>
</template>

<script lang="ts">
export default {
    name: 'Notes'
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.notes {
  font-size: 14px;
  display: block;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>