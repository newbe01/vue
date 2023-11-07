<template>
  <div>
    <table-component :table-data="tableData" />
    <div> {{ turn }} turn</div>
    <div v-if="winner"> {{ winner }} win</div>
  </div>
</template>
  
<script>
import tableComponent from "./tableComponent.vue";
import eventBus from "./eventBus.js";

  export default {
    components: {
      tableComponent,
    },
    data() {
      return {
        tableData : [
          ['', '', ''],
          ['', '', ''],
          ['', '', ''],
        ],
        turn: "O",
        winner : "",
      };
    },
    computed: {},
    methods: {
      onClickTd(rowIndex, cellIndex) {

        // const this = this.$root.$data;
            console.log(this);
            this.$set(this.tableData[rowIndex], cellIndex, this.turn);

            let win = false;
            if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
            win = true;
            }
            if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
            win = true;
            }
            if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
            win = true;
            }
            if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
            win = true;
            }

            if (win) { // 이긴 경우: 3줄 달성
            this.winner = this.turn;
            this.turn = 'O';
            this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
            } else { // 무승부
                let all = true; // all이 true면 무승부라는 뜻
                this.tableData.forEach((row) => { // 무승부 검사
                    row.forEach((cell) => {
                    if (!cell) {
                        all = false;
                    }
                    });
                });
                
                if (all) { // 무승부
                    this.winner = '';
                    this.turn = 'O';
                    this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
                } else {
                    this.turn = this.turn === 'O' ? 'X' : 'O';
                }
            }
      }
    },
    created() {
      eventBus.$on('clickTd', this.onClickTd);
    },
    mounted() {},
    beforeDestroy() {},
    watch: {
      //값의 변경을 감지
    },
  };
</script>
  
<style>
  talbe {
    border-collapse: collapse;
  }
  td {
    border : 1px solid black;
    width : 40px;
    height: 40px;
    text-align: center;
  }
</style>
  