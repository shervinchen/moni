const localStorageKeyName = "recordList";
import clone from '@/lib/clone'

const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem) {
    const recordCopy: RecordItem = clone(record);
    recordCopy.createdAt = new Date();
    this.data.push(recordCopy);
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]") as RecordItem[];
    return this.data
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};

export default recordListModel;
