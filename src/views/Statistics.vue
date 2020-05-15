<template>
  <Layout>
    <Tabs
      class-prefix="type"
      :data-source="recordTypeList"
      :value.sync="type"
    />
    <Tabs
      height="48px"
      class-prefix="interval"
      :data-source="intervalList"
      :value.sync="interval"
    />
    <ol>
      <li v-for="group in result" :key="group.title">
        <h3 class="title">{{ formatTitle(group.title) }}</h3>
        <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
            <span>{{ tagString(item.tags) }}</span>
            <span class="notes">{{ item.notes }}</span>
            <span>￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

import Tabs from "@/components/Tabs.vue";

import intervalList from "@/constants/intervalList";
import recordTypeList from "@/constants/recordTypeList";

import dayjs from 'dayjs'

@Component({
  components: {
    Tabs,
  },
})
export default class Statistics extends Vue {
  tagString(tags: Tag[]) {
    return tags.length === 0 ? '无' : tags.join(',')
  }

  formatTitle(string: string) {
    const day = dayjs(string)
    const now = dayjs()
    if (day.isSame(now, 'day')) {
      return '今天'
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天'
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天'
    } else if (day.isSame(now, 'year')) {
      return day.format('M月D日')
    } else {
      return day.format('YYYY年M月D日')
    }
  }

  get recordList() {
    return (this.$store.state as RootState).recordList;
  }

  get result() {
    const { recordList } = this;
    type HashTableValue = { title: string; items: RecordItem[] }
    const hashTable: {
      [key: string]: HashTableValue;
    } = {};
    for (let index = 0; index < recordList.length; index++) {
      const [date, time] = recordList[index].createdAt.split("T");
      if (date) {
        hashTable[date] = hashTable[date] || { title: date, items: [] };
        hashTable[date].items.push(recordList[index]);
      }
    }
    console.log(hashTable);
    return hashTable;
  }

  created() {
    this.$store.commit("fetchRecords");
  }

  type = "-";
  interval = "day";

  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: #fff;
    &.selected {
      background: #c4c4c4;
      &::after {
        display: none;
      }
    }
  }
  // .interval-tabs-item {
  // height: 48px;
  // }
  %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    @extend %item;
  }
  .record {
    @extend %item;
    background: #fff
  }
  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
}
</style>
