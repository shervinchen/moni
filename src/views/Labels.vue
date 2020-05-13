<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id">
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="create-tag-wrapper">
      <Button class="create-tag" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from '@/models/tagListModel.ts';
import Button from "@/components/Button.vue"

tagListModel.fetch()

@Component({
  components: {
    Button
  }
})
export default class Labels extends Vue {
  tags = tagListModel.data

  createTag() {
    const name = window.prompt('请输入标签名')
    if (name === '') {
      window.alert('标签名不能为空')
      return
    }
    if (name) {
      const message = tagListModel.create(name)
      if (message === 'duplicated') {
        window.alert('标签名重复了')
      } else if (message === 'success') {
        window.alert('添加成功')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .tags {
    background: #fff;
    font-size: 16px;
    padding-left: 16px;
    > .tag {
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
  .create-tag-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44 - 16px;
  }
</style>
