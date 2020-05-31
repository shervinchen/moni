import Vue from 'vue'
import { Component } from "vue-property-decorator";
import checkName from "@/lib/checkName";

@Component
export class TagHelper extends Vue {
  tagName = "";

  get tagList() {
    return this.$store.state.tagList;
  }

  get isCreateTagVisible() {
    return this.$store.state.isCreateTagVisible;
  }

  createTag () {
    this.$store.commit('setCreateTagVisible', true)
  }

  confirmCreateTag() {
    if (!checkName(this.tagName)) {
      return window.alert("标签名不能为空");
    } else {
      const names = this.tagList.map((item: Tag) => item.name);
      if (names.indexOf(this.tagName.trim()) >= 0) {
        window.alert("标签名重复了");
      } else {
        this.$store.commit("createTag", this.tagName);
        this.cancelCreateTag()
        this.tagName = "";
        window.alert("添加成功");
      }
    }
  }

  cancelCreateTag() {
    this.$store.commit("setCreateTagVisible", false);
  }
}

export default TagHelper