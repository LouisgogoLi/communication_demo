<template>
  <div class="slotpageclass">
    <SlotTable
      class="slotElTable1"
      :propsTableData="tableData1"
      :propsDefaultSort="oDefaultSort1"
      v-loading="bLoading"
      element-loading-text="測試loading"
      element-loading-background="rgba(0, 0, 0, 0.3)"
      :element-loading-svg="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
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
          :formatter="fnNumberFormatter"
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
    <button @click="testPrint">列印pdf</button>
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
    accountBalance: "1784",
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
    accountBalance: "2672",
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
    accountBalance: "3560",
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
    accountBalance: "4448",
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

const svg = ref(`
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `);

const bLoading = ref(true);
setTimeout(() => {
  bLoading.value = false;
}, 2000);

const fnNumberFormatter = (row, column, cellValue, index) => {
  const sNum = cellValue + "";
  const aNumArr = sNum.split("").reverse();
  const aOverArr = [];
  let i = 0;
  aNumArr.forEach((item) => {
    i++;
    if (i > 3) {
      i = 1;
      aOverArr.push(",");
    }
    aOverArr.push(item);
  });
  aOverArr.reverse();
  return aOverArr.join("");
};

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

import html2canvas from "html2canvas";
import JsPDF from "jspdf";
const testPrint = () => {
  html2canvas(document.querySelector("body")).then((canvas) => {
    document.body.appendChild(canvas);
    console.log(canvas.toDataURL("image/png"));
    let contentWidth = canvas.width;
    let contentHeight = canvas.height;
    let pageHeight = (contentWidth / 592.28) * 841.89;
    let leftHeight = contentHeight;
    let position = 0;
    let imgWidth = 595.28;
    let imgHeight = (592.28 / contentWidth) * contentHeight;
    let pageData = canvas.toDataURL("image/jpeg", 1.0);
    let PDF = new JsPDF("", "pt", "a4");
    if (leftHeight < pageHeight) {
      PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
    } else {
      while (leftHeight > 0) {
        PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
        leftHeight -= pageHeight;
        position -= 841.89;
        if (leftHeight > 0) {
          PDF.addPage();
        }
      }
    }
    PDF.save("測試" + ".pdf");
  });
};
</script>

<style lang="scss" scoped>
.slotpageclass {
  margin: 30px;
}
.slotElTable1 {
  :deep(.normalElTable) {
    margin-bottom: 10px;
    .transferType {
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      color: #fff;
      background: #06c5c5;
      border-radius: 15px;
    }
  }
}
.slotElTable2 {
  margin-bottom: 30px;
  :deep(.normalElTable) {
    /* 設置單數行 class */
    .oddrow {
      background-color: #fff;
    }
    /* 設置雙數行 class */
    .evenrow {
      background-color: #f6f6f6;
    }
  }
}
.slotElTable3 {
  margin-bottom: 30px;
}
.slotElTable4 {
  margin-bottom: 60px;
  :deep(.normalElTable) {
    .headerCellClass {
      background: #cffcc9;
      color: #4808f8;
    }
    /* 設置單數行 class */
    .oddrow {
      background-color: rgb(223, 247, 7);
      color: rgb(17, 5, 5);
    }
    /* 設置雙數行 class */
    .evenrow {
      background-color: #be022b;
      color: #fff;
    }
  }
}
</style>
