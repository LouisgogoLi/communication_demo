<template>
  <div>
    <SlotTable
      :class="sSlotElTableClass1"
      :propsTableData="tableData1"
      :propsHeaderCellStyle="headerCellStyle1"
      :propsTableRowStyle="tableRowStyle1"
      :propsDefaultSort="oDefaultSort1"
      :propsEmptyValue="sEmptyValue"
    >
      <template #tableDefault>
        <el-table-column
          prop="simpleShow"
          label=""
          align="center"
          min-width="5%"
        >
          <template #default="data">
            <div v-html="data.row.simpleShow"></div>
          </template>
        </el-table-column>
        <el-table-column type="index" label="序號" min-width="5%" width="60px">
        </el-table-column>
        <el-table-column
          sortable
          prop="accountDate"
          label="帳務日期"
          head-align="center"
          align="left"
          min-width="8%"
        >
        </el-table-column>
        <el-table-column
          sortable
          prop="transactionDate"
          label="交易日期"
          head-align="center"
          align="left"
          min-width="8%"
        >
        </el-table-column>
        <el-table-column
          prop="transactionTime"
          label="交易時間"
          align="center"
          min-width="7%"
        >
        </el-table-column>
        <el-table-column
          prop="transactionDirections"
          label="交易說明"
          align="center"
          min-width="7%"
        >
        </el-table-column>
        <el-table-column
          prop="payoutAmount"
          label="支出金額"
          align="right"
          min-width="7%"
        >
        </el-table-column>
        <el-table-column
          prop="deposits"
          label="存入金額"
          align="right"
          min-width="7%"
        >
        </el-table-column>
        <el-table-column
          prop="accountBalance"
          label="帳面餘額"
          align="right"
          min-width="7%"
        >
        </el-table-column>
        <el-table-column
          prop="ticketNumber"
          label="票據號碼"
          align="center"
          min-width="7%"
        >
        </el-table-column>
        <el-table-column prop="note" label="備註" min-width="17%">
        </el-table-column>
      </template>
    </SlotTable>
  </div>
</template>

<script>
export default {
  name: "SlotElTable",
};
</script>

<script setup>
import SlotTable from "@/components/slotTest/slotElTable/SlotTable.vue";

import { ref, reactive } from "vue";

const sSlotElTableClass1 = ref("slotElTable1");
const sEmptyValue = ref("沒有資料");

const tableData1 = [
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/30",
    transactionTime: "11:32:00",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "8",
    accountBalance: "8",
    ticketNumber: "",
    note: "0022012648498651 941門轉綁定紅包",
  },
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:31:53",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "888",
    accountBalance: "896",
    ticketNumber: "",
    note: "8004000028000721 004",
  },
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:32:59",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "888",
    accountBalance: "	1,784",
    ticketNumber: "",
    note: "8004000028000721 004",
  },
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:33:50",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "888",
    accountBalance: "2,672",
    ticketNumber: "",
    note: "8004000028000721 004",
  },
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:34:35",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "888",
    accountBalance: "3,560",
    ticketNumber: "",
    note: "8004000028000721 004",
  },
  {
    simpleShow: "<span class='transferType'>入</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:35:27",
    transactionDirections: "ＡＴＭ轉",
    payoutAmount: "",
    deposits: "888",
    accountBalance: "4,448",
    ticketNumber: "",
    note: "8004000028000721 004",
  },
  {
    simpleShow:
      "<span class='transferType' style='background: #cc3e03;'>出</span>",
    accountDate: "2022/02/07",
    transactionDate: "2022/01/31",
    transactionTime: "01:37:43",
    transactionDirections: "電支轉帳",
    payoutAmount: "4,448",
    deposits: "",
    accountBalance: "",
    ticketNumber: "",
    note: "0020992000988559 icash Pay",
  },
];

//row為某一行的除操作外的全部數據
//column為某一列的屬性
//rowIndex為某一行(從0開始數起)
//columnIndex為某一列(從0開始數起)
const headerCellStyle1 = ({ row, column, rowIndex, columnIndex }) => {
  if (columnIndex === 2 && column.order) {
    return { color: "#1e8ece", background: "#e5ebf3" };
  } else if (columnIndex === 3 && column.order) {
    return { color: "#1e8ece", background: "#e5ebf3" };
  } else {
    return { color: "#566374", background: "#e5ebf3" };
  }
};

const tableRowStyle1 = ({ row, column, rowIndex, columnIndex }) => {
  if (rowIndex % 2 === 0) {
    return { background: "#f6f6f6" };
  } else {
    return { background: "#f8fafb" };
  }
};

const oDefaultSort1 = reactive({ prop: "accountDate", order: "ascending" });
</script>

<style scoped>
.slotElTable1 :deep(.normalElTable) {
  width: 100%;
  margin-bottom: 10px;
}
</style>
