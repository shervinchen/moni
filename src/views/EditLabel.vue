<template>
  <Layout>
    <div class="nav-bar">
        <Icon class="left-icon" name="left" />
        <span class="title">编辑标签</span>
        <span class="right-icon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem placeholder="请输入标签名" field-name="标签名" />
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagsListModel from "@/models/tagListModel";
import FormItem from '@/components/Money/FormItem.vue'
import Button from "@/components/Button.vue"

@Component({
  components: {
    FormItem,
    Button
  }
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagsListModel.fetch();
    const tags = tagsListModel.data;
    const tag = tags.filter((tag) => tag.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-bar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .title {
      
    }
    > .left-icon {
      width: 24px;
      height: 24px;
    }
    > .right-icon {
      width: 24px;
      height: 24px;
    }
  }
  .form-wrapper {
    background: #fff;
    margin-top: 8px;
  }
  .button-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44 - 16px;
  }
</style>
