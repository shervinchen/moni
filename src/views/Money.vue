<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Tabs :data-source="recordTypeList" :value.sync="record.type" />
    <div class="notes">
      <FormItem :value.sync="record.notes" placeholder="在这里输入备注" field-name="备注" />
    </div>
    <Tags :value.sync="record.tags" />
    <Dialog title="新增标签" :visible="isCreateTagVisible" @confirm="confirmCreateTag" @cancel="cancelCreateTag">
      <FormItem
        slot="content"
        :value.sync="tagName"
        placeholder="在这里输入名称"
        field-name="标签名"
      />
    </Dialog>
    <Dialog title="提示" :visible="isSelectTagVisible" @confirm="confirmSelectTag" @cancel="cancelSelectTag">
      <div slot="content" class="info">请至少选择一个标签</div>
    </Dialog>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { mixins } from 'vue-class-component';

import NumberPad from "@/components/Money/NumberPad.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";

import Tabs from "@/components/Tabs.vue";

import recordTypeList from '@/constants/recordTypeList'
import Dialog from "@/components/Dialog.vue";
import TagHelper from '@/mixins/TagHelper';

@Component({
  components: {
    NumberPad,
    FormItem,
    Tags,
    Tabs,
    Dialog,
  }
})
export default class Money extends mixins(TagHelper) {
  get recordList() {
    return this.$store.state.recordList
  }

  recordTypeList = recordTypeList

  isSelectTagVisible = false

  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
    createdAt: ""
  };

  created() {
    this.$store.commit('fetchRecords')
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      return window.alert('请至少选择一个标签')
      // this.isSelectTagVisible = true
      // return
    }
    this.$store.commit('createRecord', this.record)
    window.alert('已保存')
    this.record.tags = []
    this.record.notes = ''
  }

  confirmSelectTag () {
    this.isSelectTagVisible = false
  }

  cancelSelectTag () {
    this.isSelectTagVisible = false
  }
}
</script>

<style lang="scss" scoped>
::v-deep .layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
.info {
  text-align: center;
}
</style>
