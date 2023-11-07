<template>
  <div>
    <table-component/>
    <div> {{ turn }} turn</div>
    <div v-if="winner"> {{ winner }} win</div>
  </div>
</template>
  
<script>
import store from "./store";
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
  