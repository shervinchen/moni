<template>
  <Layout>
    <ol class="tags">
      <li>
        <span>衣</span>
        <Icon name="right" /></li>
      <li>
        <span>食</span>
        <Icon name="right" /></li>
      <li>
        <span>住</span>
        <Icon name="right" /></li>
      <li>
        <span>行</span>
        <Icon name="right" /></li>
    </ol>
    <div class="create-tag-wrapper">
      <button class="create-tag">新建标签</button>
    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: "Labels",
};
</script>

<style lang="scss" scoped>
  .tags {
    background: #fff;
    font-size: 16px;
    padding-left: 16px;
    > li {
      display: flex;
      min-height: 44px;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      svg {
        width: 18px;
        height: 18px;
        color: #666;
        margin-right: 16px;
      }
    }
  }
  .create-tag {
    background: #767676;
    color: #fff;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 44 - 16px;
    }
  }
</style>
