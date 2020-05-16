import Vue from 'vue'
import { Component } from "vue-property-decorator";

@Component
export class TagHelper extends Vue {
  createTag () {
    this.$store.commit('setDialogVisible', true)
  }
}

export default TagHelper