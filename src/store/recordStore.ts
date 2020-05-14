import clone from "@/lib/clone";

const localStorageKeyName = "recordList";

const recordStore = {
  recordList: [] as RecordItem[],
  // record store
  fetchRecords() {
    this.recordList = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    ) as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord (record: RecordItem) {
    const recordCopy: RecordItem = clone(record);
    recordCopy.createdAt = new Date();
    this.recordList && this.recordList.push(recordCopy);
    recordStore.saveRecords();
  },
};

recordStore.fetchRecords();

export default recordStore;
