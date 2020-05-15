import Vue from 'vue'
import { Component } from "vue-property-decorator";
import checkName from '@/lib/checkName'

@Component
export class TagHelper extends Vue {
  get tagList() {
    return this.$store.state.tagList
  }

  createTag () {
    const name = window.prompt('请输入标签名')
    if (name !== null) {
      if (!checkName(name)) {
        return window.alert('标签名不能为空')
      } else {
        const names = this.tagList.map((item: Tag) => item.name)
        if (names.indexOf(name) >= 0) {
          window.alert("标签名重复了");
        } else {
          this.$store.commit('createTag', name)
          window.alert("添加成功");
        }
      }
    }
  }
}

export default TagHelper