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
    <Dialog title="新增标签" :visible="isCreateTagVisible" @confirm="confirmCreateTag" @cancel="cancelCreateTag">
      <FormItem
        slot="content"
        :value.sync="tagName"
        placeholder="在这里输入名称"
        field-name="标签名"
      />
    </Dialog>
  </Layout>
</template>

<script lang="ts">
// import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue"
import { mixins } from 'vue-class-component';
import TagHelper from '@/mixins/TagHelper'
import FormItem from "@/components/Money/FormItem.vue";
import Dialog from "@/components/Dialog.vue";

@Component({
  components: {
    Button,
    FormItem,
    Dialog
  },
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList
  }

  created() {
    this.$store.commit('fetchTags')
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
