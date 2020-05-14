<template>
  <Layout>
    <div class="nav-bar">
        <Icon class="left-icon" name="left" @click="goBack" />
        <span class="title">编辑标签</span>
        <span class="right-icon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="currentTag.name" @update:value="update" placeholder="请输入标签名" field-name="标签名" />
    </div>
    <div class="button-wrapper">
      <Button @click="save">保存</Button>
      <Button @click="remove">删除</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import FormItem from '@/components/Money/FormItem.vue'
import Button from "@/components/Button.vue"

import checkName from '@/lib/checkName'

@Component({
  components: {
    FormItem,
    Button
  },
})
export default class EditLabel extends Vue {
  get currentTag() {
    return this.$store.state.currentTag
  }

  created() {
    this.$store.commit('fetchTags')
    this.$store.commit('setCurrentTag', this.$route.params.id)
    if (!this.currentTag) {
      this.$router.replace("/404");
    }
  }

  update(name: string) {
    if (this.currentTag) {
      this.$store.commit('updateTag', name)
    }
  }

  save() {
    if (this.currentTag) {
      if (!checkName(this.currentTag.name)) {
        return window.alert('标签名不能为空')
      } else {
        this.$store.commit('saveTag')
      }
    }
  }

  remove() {
    if (this.currentTag) {
      this.$store.commit('removeTag', this.currentTag.id)
    }
  }

  goBack() {
    this.$router.back()
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
    // > .title {
      
    // }
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
    .button {
      margin: 0 16px;
    }
  }
</style>
