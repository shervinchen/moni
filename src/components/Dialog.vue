<template>
  <div v-show="isDialogVisible" class="dialog-wrapper">
    <div class="dialog">
      <div class="header">新增标签</div>
      <div class="content">
        <FormItem
          :value.sync="value"
          placeholder="在这里输入名称"
          field-name="标签名"
        />
      </div>
      <div class="footer">
        <button class="button" @click="cancel">取消</button>
        <button class="button confirm" @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import FormItem from "@/components/Money/FormItem.vue";
import checkName from "@/lib/checkName";

@Component({
  components: {
    FormItem,
  },
})
export default class Dialog extends Vue {
  get isDialogVisible() {
    return this.$store.state.isDialogVisible;
  }

  get tagList() {
    return this.$store.state.tagList;
  }

  value = "";

  confirm() {
    if (!checkName(this.value)) {
      return window.alert("标签名不能为空");
    } else {
      const names = this.tagList.map((item: Tag) => item.name);
      if (names.indexOf(this.value.trim()) >= 0) {
        window.alert("标签名重复了");
      } else {
        this.$store.commit("createTag", this.value);
        this.cancel();
        this.value = "";
        window.alert("添加成功");
      }
    }
  }

  cancel() {
    this.$store.commit("setDialogVisible", false);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.dialog-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  .dialog {
    position: fixed;
    z-index: 2;
    top: 45%;
    left: 50%;
    width: 320px;
    overflow: hidden;
    font-size: 16px;
    background-color: #fff;
    border-radius: 16px;
    transform: translate3d(-50%, -50%, 0);
    .header {
      padding-top: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
    }
    .content {
      padding: 16px 0;
      color: #646566;
      font-size: 14px;
      line-height: 20px;
    }
    .footer {
      position: relative;
      display: flex;
      overflow: hidden;
      user-select: none;
      .button {
        border: 0;
        flex: 1;
        width: 100%;
        height: 50px;
        color: #323233;
        background-color: #fff;
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 44px;
        font-size: 16px;
        line-height: 1.2;
        text-align: center;
        border-radius: 2px;
        cursor: pointer;
        &::before {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background-color: #000;
          border: inherit;
          border-color: #000;
          border-radius: inherit;
          transform: translate(-50%, -50%);
          opacity: 0;
          content: " ";
        }
        &.confirm {
          color: #1989fa;
          &::after {
            position: absolute;
            content: " ";
            pointer-events: none;
            top: -50%;
            right: -50%;
            bottom: -50%;
            left: -50%;
            border-left: 1px solid #ebedf0;
            transform: scale(0.5);
          }
        }
      }
      &::after {
        position: absolute;
        content: " ";
        pointer-events: none;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        border-top: 1px solid #ebedf0;
        transform: scale(0.5);
      }
    }
  }
}
</style>
