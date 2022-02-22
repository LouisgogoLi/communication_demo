<template>
  <div class="slotpageclass">
    <SlotTable
      class="slotElTable1"
      :propsTableData="tableData1"
      :propsDefaultSort="oDefaultSort1"
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
    <SlotTable class="slotElTable2" :propsTableData="tableData2">
      <template #tableDefault>
        <el-table-column prop="salaryItemName" label="薪資項目名稱">
        </el-table-column>
        <el-table-column prop="sentMoney" label="應發金額"> </el-table-column>
        <el-table-column prop="deductMoney" label="應扣金額"> </el-table-column>
        <el-table-column prop="note" label="備註"> </el-table-column>
      </template>
    </SlotTable>
    <SlotTable
      class="slotElTable3"
      :propsTableData="tableData3"
      :propsEmptyValue="sEmptyValue3"
    >
      <template #tableDefault>
        <el-table-column prop="note" label="備註"> </el-table-column>
      </template>
    </SlotTable>
    <SlotTable class="slotElTable4" :propsTableData="tableData4">
      <template #tableDefault>
        <el-table-column prop="salaryItemName" label="薪資項目名稱">
        </el-table-column>
        <el-table-column prop="sentMoney" label="應發金額"> </el-table-column>
        <el-table-column prop="deductMoney" label="應扣金額"> </el-table-column>
        <el-table-column prop="note" label="備註"> </el-table-column>
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

const oDefaultSort1 = reactive({ prop: "accountDate", order: "ascending" });

const tableData2 = [
  {
    salaryItemName: "本薪",
    sentMoney: "87,000",
    deductMoney: "-",
    note: "我是備註文字1",
  },
  {
    salaryItemName: "健保費",
    sentMoney: "-",
    deductMoney: "3,500",
    note: "我是備註文字2",
  },
  {
    salaryItemName: "勞保費",
    sentMoney: "-",
    deductMoney: "3,600",
    note: "我是備註文字3",
  },
  {
    salaryItemName: "總計",
    sentMoney: "80,000",
    deductMoney: "-",
    note: "我是備註文字4",
  },
];

const tableData3 = [];
const sEmptyValue3 = ref("沒有備註資料");

const tableData4 = [
  {
    salaryItemName: "本薪",
    sentMoney: "87,000",
    deductMoney: "-",
    note: "我是備註文字1",
  },
  {
    salaryItemName: "健保費",
    sentMoney: "-",
    deductMoney: "3,500",
    note: "我是備註文字2",
  },
  {
    salaryItemName: "勞保費",
    sentMoney: "-",
    deductMoney: "3,600",
    note: "我是備註文字3",
  },
  {
    salaryItemName: "總計",
    sentMoney: "80,000",
    deductMoney: "-",
    note: "我是備註文字4",
  },
];
</script>

<style scoped>
.slotpageclass {
  margin: 30px;
}
.slotElTable1 :deep(.normalElTable) {
  margin-bottom: 10px;
}
.slotElTable1 :deep(.normalElTable .transferType) {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #06c5c5;
  border-radius: 15px;
}
.slotElTable2 {
  margin-bottom: 30px;
}
/* 設置單數行 class */
.slotElTable2 :deep(.normalElTable .oddrow) {
  background-color: #fff;
}
/* 設置雙數行 class */
.slotElTable2 :deep(.normalElTable .evenrow) {
  background-color: #f6f6f6;
}
.slotElTable3 {
  margin-bottom: 30px;
}
.slotElTable4 {
  margin-bottom: 60px;
}
.slotElTable4 :deep(.normalElTable .headerCellClass) {
  background: #cffcc9;
  color: #4808f8;
}
/* 設置單數行 class */
.slotElTable4 :deep(.normalElTable .oddrow) {
  background-color: rgb(223, 247, 7);
  color: rgb(17, 5, 5);
}
/* 設置雙數行 class */
.slotElTable4 :deep(.normalElTable .evenrow) {
  background-color: #be022b;
  color: #fff;
}
</style>
