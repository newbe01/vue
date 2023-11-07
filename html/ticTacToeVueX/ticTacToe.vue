<template>
  <div>
    <table-component>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td @click="onClickTd(rowIndex, cellIndex)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">{{ cellData }}</td>
      </tr>
    </table-component>
    <div> {{ turn }} turn</div>
    <div v-if="winner"> {{ winner }} win</div>
  </div>
</template>
  
<script>
import store, {CLICK_CELL, SET_WINNER, RESET_GAME, CHANGE_TURN, NO_WINNER} from "./store";
import { mapState } from "vuex";

import tableComponent from "./tableComponent.vue";

  export default {
    store,
    components: {
      tableComponent,
    },
    data() {
      return {
        
      };
    },
    computed: {
      // winner() {
      //   return this.$store.state.winner;
      // },
      // turn() {
      //   return this.$store.state.turn;
      // },
      // tableData() {
      //   return this.$store.state.tableData;
      // }
      // ...mapState({
      //   winner(state) {
      //     return state.winner + this.data;
      //   },
      //   turnSatate : 'turn',
      // }),
      ...mapState(["tableData", "turn", "winner"]),
      turnMessage() {
        return this.$store.getters.turnMessage;
      }
    },
    methods: {
      onClickTd(rowIndex, cellIndex) {
        console.log(this.cellData);
                if (this.cellData) return;

                // const this = this.$root.$data;
                this.$store.commit(CLICK_CELL, { row : rowIndex, cell : cellIndex });

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
                    this.$store.commit(SET_WINNER, this.turn);
                    this.$store.commit(RESET_GAME);
                    
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
                        this.$store.commit(NO_WINNER);
                        this.$store.commit(RESET_GAME);
                    } else {
                        this.$store.commit(CHANGE_TURN);
                    }
                }
            }
    },
    mounted() {},
    beforeDestroy() {},
    watch: {
      //값의 변경을 감지
    },
  };
</script>
  
<style>
  table {
    border-collapse: collapse;
  }
  td {
    border : 1px solid black;
    width : 40px;
    height: 40px;
    text-align: center;
  }
</style>
  