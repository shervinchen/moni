<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord" />
    <Types :value.sync="record.type" />
    <div class="notes">
      <FormItem placeholder="在这里输入备注" field-name="备注" @update:value="onUpdateNotes" />
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";

import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import FormItem from "@/components/Money/FormItem.vue";
import Tags from "@/components/Money/Tags.vue";
import recordListModel from '@/models/recordListModel.ts'
import tagListModel from '@/models/tagListModel.ts'

const recordList: RecordItem[] = recordListModel.fetch();
const tagList = tagListModel.fetch();

@Component({
  components: {
    NumberPad,
    Types,
    FormItem,
    Tags,
  },
})
export default class Money extends Vue {
  tags = tagList;
  recordList: RecordItem[] = recordList

  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    const recordCopy: RecordItem = recordListModel.clone(this.record);
    recordCopy.createdAt = new Date();
    this.recordList.push(recordCopy);
  }

  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save(this.recordList)
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
