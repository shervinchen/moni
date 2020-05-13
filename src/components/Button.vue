<template>
  <button class="button" @click="$emit('click', $event)"><slot></slot></button>
</template>

<style lang="scss" scoped>
.button {
  background: #767676;
  color: #fff;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
}
</style>
