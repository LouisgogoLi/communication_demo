<template>
  <div>
    <el-table
      :data="props.propsTableData"
      class="normalElTable"
      :header-cell-style="props.propsHeaderCellStyle"
      :row-style="props.propsTableRowStyle"
      :default-sort="props.propsDefaultSort"
    >
      <slot name="tableDefault"></slot>
      <template #empty>
        <span>{{ props.propsEmptyValue }}</span>
      </template>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "SlotTable",
};
</script>

<script setup>
const props = defineProps({
  propsTableData: {
    type: Array,
    default: () => [],
  },
  propsHeaderCellStyle: {
    type: Function,
    default: () => {},
  },
  propsTableRowStyle: {
    type: Function,
    default: () => {},
  },
  propsDefaultSort: {
    type: Object,
    default: () => {
      return {};
    },
  },
  propsEmptyValue: {
    type: String,
    default: "查無資料",
  },
});
</script>

<style lang="scss" scoped>
.normalElTable :deep(.transferType) {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #06c5c5;
  border-radius: 15px;
}
.normalElTable :deep(th) {
  padding-top: 10px;
  padding-bottom: 10px;
  text-shadow: 0 1px 0 rgb(204 204 204 / 70%);
}
.normalElTable :deep(th > div) {
  padding-left: 10px;
  padding-right: 10px;
  text-shadow: 0 1px 0 rgb(204 204 204 / 70%);
}
.normalElTable :deep(tr) {
  border-spacing: 0;
  border-collapse: collapse;
  border: solid 1px #e6ecef;
}
.normalElTable :deep(td) {
  padding-top: 15px;
  padding-bottom: 15px;
  @media screen and (max-width: 1100px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}
.normalElTable :deep(.el-table__empty-block) {
  min-height: 50px;
  background: #f6f6f6;
  @media screen and (max-width: 1100px) {
    min-height: 40px;
  }
}
.normalElTable :deep(.el-table__empty-text) {
  line-height: 50px;
  color: #d54a3c;
  font-weight: bold;
  font-size: 1.25em;
  @media screen and (max-width: 1100px) {
    line-height: 40px;
  }
}
</style>
