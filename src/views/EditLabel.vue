<template>
  <Layout> </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagsListModel from "@/models/tagListModel";

@Component
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

<style lang="scss" scoped></style>
